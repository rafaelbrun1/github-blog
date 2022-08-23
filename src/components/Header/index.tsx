import { Logo, HeaderContainer, Effect, Effect1 } from "./styles";
import logo from "../../assets/logo.svg";
import effect1 from "../../assets/effect2.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Effect1 src={effect1} />
      <Logo src={logo} />
      <Effect src={effect1} />
    </HeaderContainer>
  );
}
