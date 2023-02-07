import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
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
import { StyledSelect } from "../components/styled/StyledSelect";

const Register: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState("Ghana");

  const toggleVisibility = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

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
            <StyledSelect>
              <Image src={`./assets/${country}.svg`} width="10%" />
              <div></div>
              <select onChange={(e) => setCountry(e.target.value)}>
                <option value="Germany">Germany</option>
                <option value="Ghana" selected>
                  Ghana
                </option>
                <option value="Uganda">Uganda</option>
              </select>
            </StyledSelect>
            {/* <Select /> */}
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
              <input
                type={visible ? "text" : "password"}
                placeholder="* * * * * * * * * * *"
              />
              <div onClick={toggleVisibility}>
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
            <Button>Sign up</Button> <Link to="/login">Back to login page</Link>
          </Flex>
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default Register;
