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

  variants: {
    variant: {
      simple: {
        backgroundColor: "$gray900",
        width: "13rem",
        color: "$white",
        border: "1px solid $gray500",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        paddingLeft: "2rem",
        height: "3.2rem",
        textTransform: "uppercase",
        opacity: "0.8",
        fontSize: "$xs",

        "&:hover": {
          color: "$white",
          backgroundColor: "$gray300",
        },
      },
      disable: {
        color: "$white",
        backgroundColor: "$gray200",
        border: "1px solid $white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 42px",
        height: "4rem",
        textTransform: "uppercase",
        cursor: "not-allowed",
        opacity: "0.8",
        "@desktop": {
          width: "90%",
        },
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
