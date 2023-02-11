import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { InputField } from "../components/styled/InputField";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";

const ChangePassword = () => {
  const [visibleNew, setVisibleNew] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const toggleVisibility = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visibleNew) setVisibleNew(false);
    else setVisibleNew(true);
  };

  const toggleVisibilityConfirm = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visibleConfirm) setVisibleConfirm(false);
    else setVisibleConfirm(true);
  };

  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          <h2>Forgotten your password?</h2>
          <h3>Enter a new password for your account</h3>

          <div></div>
          <div></div>

          <InputGroup>
            <Label>New Password</Label>
            <InputField>
              <input
                type={visibleNew ? "text" : "password"}
                placeholder="* * * * * * * * * * *"
              />
              <div onClick={toggleVisibility}>
                <MdRemoveRedEye />
              </div>
            </InputField>
          </InputGroup>

          <InputGroup>
            <Label>Confirm Password</Label>
            <InputField>
              <input
                type={visibleConfirm ? "text" : "password"}
                placeholder="* * * * * * * * * * *"
              />
              <div onClick={toggleVisibilityConfirm}>
                <MdRemoveRedEye />
              </div>
            </InputField>
          </InputGroup>

          <Button width="100%">Save</Button>

          <Link to="/login">
            <div>Back to login</div>
          </Link>
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default ChangePassword;
