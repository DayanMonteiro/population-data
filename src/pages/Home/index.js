import React from "react";
import Footer from "../../components/Footer";
import Graphic from "../../components/Graphic";
import Header from "../../components/Header";
import Maps from "../../components/Maps";
import * as S from "./styled";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Title>Aplicação</S.Title>
      <S.Content>
        <Maps />
        <Graphic />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Home;