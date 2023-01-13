import React from "react";
import Footer from "../../components/Footer";
import Charts from "../../components/Charts";
import Header from "../../components/Header";
import Maps from "../../components/Maps";
import * as S from "./styled";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Maps />
        <Charts />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Home;
