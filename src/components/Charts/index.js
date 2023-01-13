import React from "react";
import * as S from "./styled";

import ApexCharts from "react-apexcharts";

import populacao from "../../mocks/populacao_bairros.json";

const Charts = () => {
  const data = populacao;

  console.log("população dados", data);

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [data[0].ano, data[1].ano, data[2].ano, data[3].ano],
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
        data[0].populacao,
        data[1].populacao,
        data[2].populacao,
        data[3].populacao,
      ],
    },
  ];

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <S.Title>Resultado da pesquisa</S.Title>
          <S.Text>Evolução populacional do bairo {"selecionado"}</S.Text>
        </S.ContentHeader>
        <S.ContentCharts>
          <ApexCharts options={options} series={series} />
        </S.ContentCharts>
      </S.Content>
    </S.Container>
  );
};

export default Charts;
