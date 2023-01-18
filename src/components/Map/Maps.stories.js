import { Map } from ".";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = [-23.20582538384978, -45.91131739786456];

export default {
  title: "Components/Map",
  component: Map,
};

export const MinimalTemplate = () => {
  const JdColinas = [-23.201988799054753, -45.9127794411852];
  const JdIndustrias = [-23.226451935767667, -45.91971984054082];
  const JdAlvorada = [-23.222431098971583, -45.9139531554717];
  const PqResAquarius = [-23.215819291330615, -45.90566460989417];
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
      <Marker position={JdColinas}>
        <Popup>Jardim Colinas</Popup>
      </Marker>
      <Marker position={JdIndustrias}>
        <Popup>Jardim das Industrias</Popup>
      </Marker>
      <Marker position={JdAlvorada}>
        <Popup>Jardim Alvorada</Popup>
      </Marker>
      <Marker position={PqResAquarius}>
        <Popup>Parque Residencial Aquarius</Popup>
      </Marker>
    </MapContainer>
  );
};
