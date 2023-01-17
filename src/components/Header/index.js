import React, { useEffect } from "react";
import Button from "../Button";
import * as S from "./styled";
import LogoImage from "../../assets/img/logo-app.png";
import _isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { getNeighborhoodInfo, getPopulationAll } from "../../store/middleware";

const Header = () => {
  const dispatch = useDispatch();

  const handleNeighborhoodsInfo = async () => {
    dispatch(getNeighborhoodInfo());
  };

  const handlePopulationAll = async () => {
    //  dispatch(getPopulationAll());
  };

  const neighborhoodsNames = useSelector((state) =>
    state?.neighborhoodReducer?.neighborhood?.data?.[0]?.features?.map(
      (data) => {
        return data?.properties?.name;
      }
    )
  );
  // console.log("nome dos bairros", neighborhoodsNames);

  const populationAll = useSelector(
    (state) => state?.populationReducer?.population?.data
  );
  //  console.log("Id dos bairros", populationAll);

  useEffect(() => {
    handleNeighborhoodsInfo();
    // console.log("handleNeighborhoodsInfo", handleNeighborhoodsInfo());

    handlePopulationAll();
    //console.log("dados de todas as populações", handlePopulationAll);
  }, []);

  function handleClick() {
    console.log("nome do bairro selecionado + informações pro gráfico");
  }

  return (
    <>
      {!_isEmpty(neighborhoodsNames) && (
        <S.Container>
          <S.Logo>
            <S.Image src={LogoImage} />
          </S.Logo>
          <S.Content>
            <S.SearchDistrict>
              <S.Title>Bairro</S.Title>

              <S.Combobox
                items={neighborhoodsNames}
                onChange={(selected) => console.log(selected)}
                placeholder="Selecione o bairro"
                autocompleteProps={{
                  title: "Bairros",
                }}
              />

              <Button
                type="submit"
                variant="simple"
                onClick={() => {
                  handleClick();
                  console.log("onclick", handleClick());
                }}
              >
                Buscar
              </Button>
            </S.SearchDistrict>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default Header;
