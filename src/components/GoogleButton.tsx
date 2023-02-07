import React from "react";
import { Image } from "./styled/Image";
import { StyledGoogleBtn } from "./styled/StyledGoogleBtn";

const GoogleButton = () => {
  return (
    <StyledGoogleBtn>
      <Image src="./assets/google.svg" width="8%" />
      Signin with Google
    </StyledGoogleBtn>
  );
};

export default GoogleButton;
