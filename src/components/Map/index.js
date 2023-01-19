import React from "react";
import * as S from "./styled";
import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useDispatch, useSelector } from "react-redux";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { neighborhoods } from "./utils";
import { setResultSearchProperties } from "../../store/slices/neighborhoods.slice";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = [-23.20582538384978, -45.91131739786456];

const Maps = () => {
  const dispatch = useDispatch();

  const selectionNeighborhoods = useSelector(
    (state) => state?.neighborhoodReducer?.neighborhood?.data?.[0]?.features
  );

  const resultSearch = useSelector(
    (state) => state?.neighborhoodReducer?.resultSearchProperties
  );

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ width: "70vw", height: "85vh" }}
      whenCreated={() => {}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {neighborhoods.map((neighborhood) => (
        <Marker key={neighborhood.id} position={neighborhood.latLong}>
          <S.Popup>{neighborhood.name}</S.Popup>
        </Marker>
      ))}

      {!!selectionNeighborhoods &&
        selectionNeighborhoods.map((neighborhood) => (
          <Polygon
            key={neighborhood.properties.id}
            pathOptions={{
              fillColor:
                resultSearch.id === neighborhood.properties.id
                  ? "#2b82cb"
                  : "#FD8D3C",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={neighborhood?.geometry?.coordinates[0][0].map((p) => [
              p[1],
              p[0],
            ])}
            eventHandlers={{
              click: (e) => {
                dispatch(
                  setResultSearchProperties({
                    id: neighborhood?.properties?.id,
                    name: neighborhood?.properties?.name,
                  })
                );
              },
            }}
          />
        ))}
    </MapContainer>
  );
};

export default Maps;
