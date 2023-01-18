import { styled } from "../../theme";

export const Button = styled("button", {
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "7px",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  fontFamily: "$sans",
  fontWeight: "$regular",
  fontSize: "$sm",
  transition: "background-color 300ms ease",
  width: "100%",
  borderRadius: "0.3rem",
  padding: "1.2rem",

  variants: {
    variant: {
      simple: {
        backgroundColor: "$gray900",
        color: "$white",
        width: "13rem",
        height: "3.2rem",
        border: "1px solid $gray500",
        fontSize: "$xs",
        textTransform: "uppercase",
        opacity: "0.8",

        "&:hover": {
          color: "$white",
          backgroundColor: "$gray300",
        },
      },
      disable: {
        backgroundColor: "$gray200",
        color: "$white",
        width: "13rem",
        height: "3.2rem",
        border: "1px solid $white",
        fontSize: "$xs",
        textTransform: "uppercase",
        cursor: "not-allowed",
        opacity: "0.8",
      },
    },
    size: {
      small: {
        fontSize: "$xxs",
        padding: "4px 24px",
        height: "3rem",
      },
    },
  },
});
