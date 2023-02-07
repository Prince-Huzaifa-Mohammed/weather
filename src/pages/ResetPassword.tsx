import { Link } from "react-router-dom";
import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { Image } from "../components/styled/Image";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";

const ResetPassword: React.FC = () => {
  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          <h2>Reset your Password</h2>
          <p>Don't worry, we will help you</p>

          <Image src="./assets/password.svg" width="60%" />

          <p>
            It happens. We all forget our passwords sometimes. The most
            important thing is to be able to recover your password in a secured
            manner. Worry not. Please click the button bellow and you will be
            able to create a new password for your account.
          </p>

          <Button width="100%">Reset your password</Button>

          <Link to="/login">Back to login</Link>
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default ResetPassword;
