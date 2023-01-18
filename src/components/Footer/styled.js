import { styled } from "../../theme";

export const Container = styled("div", {
  backgroundColor: "$black",
  width: "100%",
  height: "4.8rem",
  position: "absolute",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
});

export const Content = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 2rem",
});

export const Title = styled("h1", {
  fontSize: "$md",
  color: "$white",
});

export const Whatsapp = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Text = styled("p", {
  fontSize: "$md",
  color: "$white",
  marginRight: "1rem",
});

export const Link = styled("a", {
  cursor: "pointer",
});
