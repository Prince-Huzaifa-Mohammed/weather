import { MdRemoveRedEye } from "react-icons/md";
import MainLogo from "../components/MainLogo";
import Select from "../components/Select";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { Flex } from "../components/styled/Flex";
import { InputField } from "../components/styled/InputField";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";

const Register: React.FC = () => {
  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          <h2>Create an Account</h2>
          <p>Sign up to get started with an account</p>

          <InputGroup>
            <Label>Fullname</Label>
            <InputField>
              <input type="text" placeholder="Kwame Kojo Mahamuda" />
            </InputField>
          </InputGroup>

          <InputGroup>
            <Label>Country</Label>
            <Select />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <InputField>
              <input type="email" placeholder="prince@amalitech.org" />
            </InputField>
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>
            <InputField>
              <input type="password" placeholder="* * * * * * * * * * *" />
              <div>
                <MdRemoveRedEye />
              </div>
            </InputField>
          </InputGroup>

          <Flex>
            <div>
              <p>
                By creating an account, you agree to the <br />{" "}
                <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
              </p>
            </div>
          </Flex>

          <Flex>
            <Button>Sign up</Button> <a href="/login">Back to login page</a>
          </Flex>
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default Register;
