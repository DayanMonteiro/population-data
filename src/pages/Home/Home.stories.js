import { Home } from ".";
import LogoImage from "../../assets/img/logo.png";
import { Combobox } from "evergreen-ui";
import { FaWhatsappSquare } from "react-icons/fa";

import { Chart } from ".";
import ApexCharts from "react-apexcharts";

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
  title: "Pages/Home",
  component: Home,
};

export const MinimalTemplate = () => {
  const JdColinas = [-23.201988799054753, -45.9127794411852];
  const JdIndustrias = [-23.226451935767667, -45.91971984054082];
  const JdAlvorada = [-23.222431098971583, -45.9139531554717];
  const PqResAquarius = [-23.215819291330615, -45.90566460989417];

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [2000, 2002, 2004, 2006],
    },
    yaxis: {
      tootip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      name: "População",
      data: [11576, 12345, 13450, 13550],
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: "100%",
          height: "7rem",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "59%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={LogoImage}
            style={{
              width: "12rem",
              marginLeft: "6rem",
            }}
          />
        </div>
        <div
          style={{
            width: "42%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "1.6rem",
                color: "#848484",
                marginRight: "0.5rem",
              }}
            >
              Bairro
            </h1>

            <Combobox
              items={["Item 1", "Item 2", "Item 3", "Item 4"]}
              placeholder="text"
              autocompleteProps={{
                title: "Items",
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#1F1F1F",
                color: "#FFFFFF",
                width: "10rem",
                height: "2rem",
                border: "1px solid #666666",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                opacity: "0.8",
              }}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <MapContainer
            center={center}
            zoom={14}
            style={{ width: "60vw", height: "74vh" }}
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
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                width: "100%",
                height: "10rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "1.2rem",
                  color: "#848484",
                }}
              >
                Resultado da pesquisa{" "}
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#848484",
                }}
              >
                Evolução populacional do bairro: Nome do Bairro{" "}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                marginTop: "0.5rem",
              }}
            >
              <ApexCharts options={options} series={series} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "98%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          backgroundColor: "#283034",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 2rem",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "1rem",
            }}
          >
            Copyright ©️ 2023 Dayan Monteiro dos Santos
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginRight: "1rem",
                color: "#FFFFFF",
                fontSize: "1rem",
              }}
            >
              Click para me dar um feedback
            </p>
            <a
              href={
                "https://wa.me/5524999117374?text=Ol%C3%A1+Dayan%2C+como+voc%C3%AA+est%C3%A1%3F+Vamos+falar+sobre+o+seu+teste."
              }
              target={"_blank"}
              style={{ cursor: "pointer" }}
            >
              <FaWhatsappSquare color="#02b302" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
