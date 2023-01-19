import { styled } from "../../theme";

export const Container = styled("div", {
  width: "50%",
});

export const Content = styled("div", {
  width: "100%",
  height: "65rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
});

export const ContentHeader = styled("div", {
  backgroundColor: "$white",
  width: "100%",
  height: "10rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5rem",
});

export const Title = styled("h1", {
  fontSize: "$md",
  color: "$gray400",
});

export const Text = styled("p", {
  fontSize: "$md",
  color: "$gray400",
  marginTop: "1rem",
});

export const ContentCharts = styled("div", {
  backgroundColor: "$gray100",
  width: "100%",
  marginTop: "8rem",
});
