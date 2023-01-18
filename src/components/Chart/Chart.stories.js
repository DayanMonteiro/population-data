import { Chart } from ".";
import ApexCharts from "react-apexcharts";

export default {
  title: "Components/Chart",
  component: Chart,
};

export const MinimalTemplate = () => {
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
    <div style={{ width: "50%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
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
            marginTop: "8rem",
          }}
        >
          <ApexCharts options={options} series={series} />
        </div>
      </div>
    </div>
  );
};
