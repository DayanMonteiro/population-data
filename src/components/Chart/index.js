import React, { useEffect, useState } from "react";
import * as S from "./styled";
import ApexCharts from "react-apexcharts";
import axios from "axios";

const Charts = () => {
  const [population, setPopulation] = useState([]);

  const getPopulationInfo = async () => {
    const response = await axios.get(
      "https://63bf4f31a177ed68abaefca0.mockapi.io/population"
    );
    if (response.status === 200) {
      setPopulation(response.data);
    }
    // console.log("população dados", response);
  };

  useEffect(() => {
    getPopulationInfo();
  }, []);

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
      name: "População",
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
          <S.Text>Evolução populacional do bairro:</S.Text>
        </S.ContentHeader>
        <S.ContentCharts>
          <ApexCharts options={options} series={series} />
        </S.ContentCharts>
      </S.Content>
    </S.Container>
  );
};

export default Charts;
