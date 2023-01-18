import React, { useEffect, useState } from "react";
import Button from "../Button";
import * as S from "./styled";
import LogoImage from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getNeighborhoodInfo } from "../../store/middleware";
import { get } from "lodash";
import { setResultSearchProperties } from "../../store/slices/neighborhoods.slice";

const Header = ({ response, set }) => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const handleNeighborhoodsInfo = async () => {
    dispatch(getNeighborhoodInfo());
  };

  const neighborhoodsNames = useSelector((state) =>
    state?.neighborhoodReducer?.neighborhood?.data?.[0]?.features?.map(
      (data) => {
        return data?.properties?.name;
      }
    )
  );

  const neighborhoodsData = useSelector((state) => state?.neighborhoodReducer);

  const getAll = get(neighborhoodsData, [
    "neighborhood",
    "data",
    0,
    "features",
  ]);

  const getProperties = getAll?.map((item) => ({
    name: item?.properties?.name,
    id: item?.properties?.id,
  }));

  useEffect(() => {
    handleNeighborhoodsInfo();
  }, [handleNeighborhoodsInfo]);

  const handleSelect = async () => {
    const getPropertiesData = getProperties.find(
      (item) => item.name === inputValue
    );
    return dispatch(setResultSearchProperties(getPropertiesData));
  };

  return (
    <>
      {!!neighborhoodsNames && (
        <S.Container>
          <S.Logo>
            <S.Image src={LogoImage} />
          </S.Logo>
          <S.Content>
            <S.SearchDistrict>
              <S.Title>Bairro</S.Title>

              <S.Combobox
                items={neighborhoodsNames}
                value={inputValue}
                onChange={(selected) => setInputValue(selected)}
                placeholder="Selecione o bairro"
                autocompleteProps={{
                  title: "Bairros",
                }}
              />

              <>
                {inputValue === undefined ? (
                  <Button variant="disable">Buscar</Button>
                ) : (
                  <Button
                    type="submit"
                    variant="simple"
                    onClick={() => {
                      handleSelect();
                    }}
                  >
                    Buscar
                  </Button>
                )}
              </>
            </S.SearchDistrict>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default Header;
