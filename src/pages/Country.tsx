import { useState } from "react";
import MainLogo from "../components/MainLogo";
import { Content } from "../components/styled/Content";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";
import { StyledSelect } from "../components/styled/StyledSelect";
import { Image } from "../components/styled/Image";
import { Button } from "../components/styled/Button";

const Country: React.FC = () => {
  const [country, setCountry] = useState("Ghana");

  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          <h1>Please Select a Country</h1>
          <p>
            Before you proceed to signup to this service, we would like you to
            kindly select a country for which you would like to receive weather
            updates
          </p>

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
                <option value="Rwanda">Rwanda</option>
              </select>
            </StyledSelect>
            {/* <Select /> */}
          </InputGroup>

          <Button width="100%">Proceed</Button>
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default Country;
