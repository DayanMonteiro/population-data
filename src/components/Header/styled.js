import { styled } from "../../theme";
import { Combobox as Select } from "evergreen-ui";

export const Container = styled("div", {
  backgroundColor: "$gray100",
  width: "100%",
  height: "10rem",
  display: "flex",
  justifyContent: "center",
  justifyContent: "space-between",
  position: "relative",
});

export const Logo = styled("div", {
  //  backgroundColor: "$gray200",
  // height: "8rem",
  width: "58%",
});

export const Image = styled("img", {
  width: "40rem",
  marginTop: "-14rem",
});

export const Title = styled("h1", {
  fontSize: "$md",
  color: "$gray400",
});

export const Content = styled("div", {
  // backgroundColor: "red",
  width: "42%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SearchDistrict = styled("div", {
  // backgroundColor: "pink",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const Combobox = styled(Select, {
  // backgroundColor: "red",
  marginLeft: "1rem",
});
