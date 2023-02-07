import { useState } from "react";
import { Image } from "./styled/Image";
import { StyledSelect } from "./styled/StyledSelect";

function Select() {
  const [country, setCountry] = useState("Ghana");
  return (
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
  );
}

export default Select;
