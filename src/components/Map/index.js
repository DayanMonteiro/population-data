import React from "react";
import * as S from "./styled";
import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useSelector } from "react-redux";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = [-23.20582538384978, -45.91131739786456];

const Maps = () => {
  const JdColinas = [-23.201988799054753, -45.9127794411852];
  const JdIndustrias = [-23.226451935767667, -45.91971984054082];
  const JdAlvorada = [-23.222431098971583, -45.9139531554717];
  const PqResAquarius = [-23.215819291330615, -45.90566460989417];

  const selectionNeighborhoods = useSelector(
    (state) => state?.neighborhoodReducer?.neighborhood?.data?.[0]?.features
  );

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ width: "70vw", height: "84vh" }}
      whenCreated={() => {}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={JdColinas}>
        <S.Popup>Jardim Colinas</S.Popup>
      </Marker>
      <Marker position={JdIndustrias}>
        <S.Popup>Jardim das Industrias</S.Popup>
      </Marker>
      <Marker position={JdAlvorada}>
        <S.Popup>Jardim Alvorada</S.Popup>
      </Marker>
      <Marker position={PqResAquarius}>
        <S.Popup>Parque Residencial Aquarius</S.Popup>
      </Marker>
      {!!selectionNeighborhoods && (
        <Polygon
          pathOptions={{
            fillColor: "#FD8D3C",
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            dashArray: 3,
            color: "white",
          }}
          positions={selectionNeighborhoods[0]?.geometry?.coordinates[0][0].map(
            (p) => [p[1], p[0]]
          )}
          eventHandlers={{
            mouseover: (e) => {
              const layer = e.target;
              layer.setStyle({
                fillOpacity: 1,
                weight: 2,
                dashArray: "",
                fillColor: "#FDBF92",
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
          }}
        />
      )}
      ;
      {!!selectionNeighborhoods && (
        <Polygon
          pathOptions={{
            fillColor: "#FD8D3C",
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            dashArray: 3,
            color: "white",
          }}
          positions={selectionNeighborhoods[1]?.geometry?.coordinates[0][0].map(
            (p) => [p[1], p[0]]
          )}
          eventHandlers={{
            mouseover: (e) => {
              const layer = e.target;
              layer.setStyle({
                fillOpacity: 1,
                weight: 2,
                dashArray: "",
                fillColor: "#FDBF92",
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
          }}
        />
      )}
      {!!selectionNeighborhoods && (
        <Polygon
          pathOptions={{
            fillColor: "#FD8D3C",
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            dashArray: 3,
            color: "white",
          }}
          positions={selectionNeighborhoods[2]?.geometry?.coordinates[0][0].map(
            (p) => [p[1], p[0]]
          )}
          eventHandlers={{
            mouseover: (e) => {
              const layer = e.target;
              layer.setStyle({
                fillOpacity: 1,
                weight: 2,
                dashArray: "",
                fillColor: "#FDBF92",
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
          }}
        />
      )}
      {!!selectionNeighborhoods && (
        <Polygon
          pathOptions={{
            fillColor: "#FD8D3C",
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            dashArray: 3,
            color: "white",
          }}
          positions={selectionNeighborhoods[3]?.geometry?.coordinates[0][0].map(
            (p) => [p[1], p[0]]
          )}
          eventHandlers={{
            mouseover: (e) => {
              const layer = e.target;
              layer.setStyle({
                fillOpacity: 1,
                weight: 2,
                dashArray: "",
                fillColor: "#FDBF92",
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
          }}
        />
      )}
    </MapContainer>
  );
};

export default Maps;
