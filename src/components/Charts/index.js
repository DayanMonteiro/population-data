import React, { useEffect, useState } from "react";
import * as S from "./styled";

import ApexCharts from "react-apexcharts";

// import populacao from "../../mocks/populacao_bairros.json";

import axios from "axios";

const Charts = () => {
  // const data = populacao;
  // console.log("população dados", data);

  const [population, setPopulation] = useState([]);

  const dados = async () => {
    const response = await axios.get(
      "https://63bf4f31a177ed68abaefca0.mockapi.io/population"
    );
    if (response.status === 200) {
      setPopulation(response.data);
    }
    // console.log("população dados", response);
  };

  useEffect(() => {
    dados();
  }, []);

  const neighborhoodName = (id_geometria) => {
    let value = Number;
    switch (id_geometria) {
      case 1:
        value = "Jd. Colinas";
        break;
      case 2:
        value = "Jd. das Industrias";
        break;
      case 3:
        value = "Jd. Alvorada";
        break;
      case 4:
        value = "Pq. Res. Aquarius";
      default:
        break;
    }
    return value;
  };

  console.log("population dados", population);

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [
        population?.[0]?.ano,
        population?.[1]?.ano,
        population?.[2]?.ano,
        population?.[3]?.ano,
      ],
    },
    yaxis: {
      tootip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      name: "series-1",
      data: [
        population?.[0]?.populacao,
        population?.[1]?.populacao,
        population?.[2]?.populacao,
        population?.[3]?.populacao,
      ],
    },
  ];

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <S.Title>Resultado da pesquisa</S.Title>
          <S.Text>
            {`Evolução populacional do bairo  ${neighborhoodName(
              population?.[0]?.id_geometria
            )}`}
          </S.Text>
        </S.ContentHeader>
        <S.ContentCharts>
          <ApexCharts options={options} series={series} />
        </S.ContentCharts>
      </S.Content>
    </S.Container>
  );
};

export default Charts;
