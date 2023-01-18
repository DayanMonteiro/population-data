import React from "react";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";
import Header from "../../components/Header";
import Map from "../../components/Map";
import * as S from "./styled";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Map />
        <Chart />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Home;
