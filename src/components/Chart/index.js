import React, { useEffect, useState } from "react";
import * as S from "./styled";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Charts = () => {
  const [population, setPopulation] = useState([]);
  const [chartData, setChartData] = useState([0]);

  const dispatch = useDispatch();

  const getPopulationInfo = async () => {
    const response = await axios.get(
      "https://63bf4f31a177ed68abaefca0.mockapi.io/population"
    );
    if (response.status === 200) {
      setPopulation(response.data);
    }
  };

  const resultSearch = useSelector(
    (state) => state?.neighborhoodReducer?.resultSearchProperties
  );

  useEffect(() => {
    getPopulationInfo();
  }, []);

  useEffect(() => {
    if (resultSearch.id) {
      setChartData(
        population.filter((item) => item.id_geometria === resultSearch.id)
      );
    }
  }, [resultSearch, population]);

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: chartData.map((item) => item?.ano),
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
      data: chartData.map((item) => item?.populacao),
    },
  ];

  return (
    <>
      {resultSearch?.name === undefined ? (
        <S.Container>
          <S.ContentHeader>
            <S.Text>Aguardando seleção do bairro</S.Text>
            <S.Text> para exibir resultado da pesquisa</S.Text>
          </S.ContentHeader>
        </S.Container>
      ) : (
        <S.Container>
          <S.Content>
            <S.ContentHeader>
              <S.Title>Resultado da pesquisa</S.Title>
              <S.Text>
                {`Evolução populacional do bairro: ${resultSearch?.name}`}
              </S.Text>
            </S.ContentHeader>
            <S.ContentCharts>
              <ApexCharts options={options} series={series} />
            </S.ContentCharts>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default Charts;
