import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { Flex } from "../components/styled/Flex";
import { Image } from "../components/styled/Image";
import { InputField } from "../components/styled/InputField";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";
import { Link } from "react-router-dom";

const ResetPassword: React.FC = () => {
  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          <h2>Forgotten your password?</h2>
          <h3>Don't worry, we will help you</h3>

          <InputGroup>
            <Label>Email</Label>
            <InputField>
              <input type="email" placeholder="prince@amalitech.org" />
            </InputField>
          </InputGroup>

          <Button width="100%">Send</Button>

          <Link to="/login">
            <div>
              {/* <Image src="./assets/left-arrow.png" width="20%" /> */}
              Back to login
            </div>
            {/* <span>
              <Image src="./assets/left-arrow.png" width="10%" />
              <a>Back to login</a>
            </span> */}
          </Link>
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default ResetPassword;
