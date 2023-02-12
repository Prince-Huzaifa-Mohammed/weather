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
import { MdRemoveRedEye } from "react-icons/md";
import { ButtonOutlined } from "../components/styled/ButtonOutlined";
import Divider from "../components/Divider";
import GoogleButton from "../components/GoogleButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

  const navigateToCreateAccountPage = () => {
    navigate("/register");
  };

  return (
    <div>
      <Shell>
        <SecondaryBox>
          <MainLogo />
        </SecondaryBox>
        <PrimaryBox></PrimaryBox>
        <Content>
          <SmallContainer>
            <h2>Log in to your Account</h2>
            <p>Welcome back, please enter your details</p>

            <InputGroup>
              <Label>Email</Label>
              <InputField>
                <input type="email" placeholder="prince@amalitech.org" />
                {/* <Input type="email" placeholder="prince@amalitech.org" /> */}
                {/* <div>
                  <MdRemoveRedEye />
                </div> */}
              </InputField>
            </InputGroup>

            <InputGroup>
              <Label>Password</Label>
              <InputField>
                <input
                  type={visible ? "text" : "password"}
                  placeholder="* * * * * * * * * * *"
                />
                {/* <Input type="email" placeholder="prince@amalitech.org" /> */}
                <div onClick={toggleVisibility}>
                  <MdRemoveRedEye />
                </div>
              </InputField>
            </InputGroup>

            <Flex width="100%">
              <Button width="100%">Log in</Button>
              <ButtonOutlined
                onClick={navigateToCreateAccountPage}
                width="100%"
              >
                Register
              </ButtonOutlined>
            </Flex>

            <Divider />

            <GoogleButton />
          </SmallContainer>
        </Content>
      </Shell>
    </div>
  );
};

export default LoginPage;
