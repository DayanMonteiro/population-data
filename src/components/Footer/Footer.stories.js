import { Footer } from ".";
import { FaWhatsappSquare } from "react-icons/fa";

export default {
  title: "Components/Footer",
  component: Footer,
};

export const MinimalTemplate = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 2rem",
        }}
      >
        <h1>Copyright ©️ 2023 Dayan Monteiro dos Santos</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "1rem" }}>Click para me dar um feedback</p>
          <a
            href={
              "https://wa.me/5524999117374?text=Ol%C3%A1+Dayan%2C+como+voc%C3%AA+est%C3%A1%3F+Vamos+falar+sobre+o+seu+teste."
            }
            target={"_blank"}
            style={{ cursor: "pointer" }}
          >
            <FaWhatsappSquare color="#02b302" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
