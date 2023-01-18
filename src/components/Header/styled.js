import { styled } from "../../theme";
import { Combobox as Select } from "evergreen-ui";

export const Container = styled("div", {
  backgroundColor: "$gray100",
  width: "100%",
  height: "10rem",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
});

export const Logo = styled("div", {
  width: "59%",
  display: "flex",
  alignItems: "center",
});

export const Image = styled("img", {
  width: "22rem",
  marginLeft: "6rem",
});

export const Content = styled("div", {
  width: "42%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SearchDistrict = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled("h1", {
  fontSize: "$md",
  color: "$gray400",
});

export const Combobox = styled(Select, {
  marginLeft: "1rem",
});
