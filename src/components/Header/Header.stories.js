import { Header } from ".";
import LogoImage from "../../assets/img/logo.png";
import { Combobox } from "evergreen-ui";
import Button from "../Button";

export default {
  title: "Components/Header",
  component: Header,
};

export const MinimalTemplate = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "7rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "59%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={LogoImage}
          style={{
            width: "12rem",
            marginLeft: "6rem",
          }}
        />
      </div>
      <div
        style={{
          width: "42%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.6rem",
              color: "#848484",
              marginRight: "0.5rem",
            }}
          >
            Bairro
          </h1>

          <Combobox
            items={["Item 1", "Item 2", "Item 3", "Item 4"]}
            onChange={(selected) => console.log(selected)}
            placeholder="text"
            autocompleteProps={{
              title: "Items",
            }}
          />

          <Button type="submit" variant="simple">
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};
