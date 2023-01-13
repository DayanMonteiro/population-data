import { styled } from "../../theme";
import { Combobox as Select } from "evergreen-ui";

export const Container = styled("div", {
  backgroundColor: "$gray100",
  width: "100%",
  height: "10rem",
  display: "flex",
  justifyContent: "center",
  position: "relative",
});

export const Title = styled("h1", {
  fontSize: "$md",
  color: "$gray400",
});

export const Content = styled("div", {
  // backgroundColor: "red",
  width: "40rem",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
});

export const Combobox = styled(Select, {
  // backgroundColor: "red",
  marginLeft: "1rem",
});
