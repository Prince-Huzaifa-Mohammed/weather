import { Logo } from "./styled/Logo";
import { LogoContainer } from "./styled/LogoContainer";

const MainLogo = () => {
  return (
    <LogoContainer>
      <Logo src="./assets/logo.png" />
      <h2>Weathercast</h2>
    </LogoContainer>
  );
};

export default MainLogo;
