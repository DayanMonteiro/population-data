import React from "react";
import * as S from "./styled";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Copyright ©️ 2023 Dayan Monteiro dos Santos</S.Title>
        <S.Whatsapp>
          <S.Text>Click para me dar um feedback</S.Text>
          <S.Link
            href={
              "https://wa.me/5524999117374?text=Ol%C3%A1+Dayan%2C+como+voc%C3%AA+est%C3%A1%3F+Vamos+falar+sobre+o+seu+teste."
            }
            target={"_blank"}
          >
            <FaWhatsappSquare color="#FFFFFF" size={30} />
          </S.Link>
        </S.Whatsapp>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
