import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
};

export const MinimalTemplate = () => {
  return (
    <button
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "7px",
        backgroundColor: "#1F1F1F",
        color: "white",
        border: "none",
        outline: "none",
        fontSize: "1.4rem",
        width: "13rem",
        height: "3.2rem",
        borderRadius: "0.3rem",
      }}
    >
      Text
    </button>
  );
};
