import { forwardRef } from "react";
import * as S from "./styled";

const Button = forwardRef((props, ref) => {
  return <S.Button {...props} ref={ref} />;
});
Button.displayName = "Button";

export default Button;
