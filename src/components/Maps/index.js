import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";

// import { statesData } from "./datamock";

const center = [-23.567365147042054, -46.69310779820048];

// const center = [45.908432084467613, -23.20827026939924];

const Maps = () => {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "70vw", height: "83vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=kKWJYB4aZD0QZ8yteXNH"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      {/* Finalmente entendi o erro:
      O json dos dados geometrias a localização em coordinates das coordenadas lat e long estão invertidas
      preciso serializar esse dado fazendo um map e inverte os valores das posições do array
     */}

      {statesData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            pathOptions={{
              fillColor: "#FD8D3C",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={coordinates}
            // esse cara gera o efeito ao passar o mause das áreas demarcadas alterando tonalidade
            //funcinona do mock da lib mas n funciona do do teste ainda
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 1,
                  weight: 2,
                  dashArray: "",
                  fillColor: "#BD0026",
                  opacity: 1,
                  color: "white",
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: "white",
                  fillColor: "#FD8D3C",
                });
              },
              click: (e) => {},
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default Maps;
