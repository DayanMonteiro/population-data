// import React from "react";
// import * as S from "./styled";

// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const center = [-22.53422066003257, -44.18266701424469];

import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
// import "./App.css";

const center = [-23.567365147042054, -46.69310779820048];

// const center = [-45.908432084467613, -23.20827026939924];

const Maps = () => {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "70vw", height: "80vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=kKWJYB4aZD0QZ8yteXNH"
        //   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

        // url="https://api.maptiler.com/maps/basic-v2/style.json?key=kKWJYB4aZD0QZ8yteXNH"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
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
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  dashArray: "",
                  fillColor: "#BD0026",
                  fillOpacity: 0.7,
                  weight: 2,
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
