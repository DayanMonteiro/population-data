import React from "react";
import Button from "../Button";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Bairro</S.Title>
        <S.Combobox
          items={[
            "Jd. Colinas",
            "Jd. das Industrias",
            "Jd. Alvorada",
            "Pq. Res. Aquarius",
          ]}
          onChange={(selected) => console.log(selected)}
          placeholder="Selecione o bairro"
          autocompleteProps={{
            // Used for the title in the autocomplete.
            title: "Bairros",
          }}
        />
        <Button type="submit" variant="simple">
          Buscar
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
