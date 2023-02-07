import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { Flex } from "../components/styled/Flex";
import { Image } from "../components/styled/Image";
// import { Logo } from "../components/styled/Logo";
// import { LogoContainer } from "../components/styled/LogoContainer";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";

const Home = () => {
  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
        {/* <LogoContainer>
          <Logo src="./assets/logo.png" />
          <h2>Weathercast</h2>
        </LogoContainer> */}
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <Image src="./assets/Weather-notification.svg" width="40%" />
        <h1>Welcome to Amalitech weather</h1>
        <Flex>
          <Button>Create An Account</Button>
          <Flex>
            <p>Already have an account?</p>
            <a href="">Log in</a>
          </Flex>
        </Flex>
      </Content>
    </Shell>
  );
};

export default Home;