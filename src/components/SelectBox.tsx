import * as React from "react";
import { SelectBoxProps } from "../interfaces/interfaces";

const SelectBox: React.FC<SelectBoxProps> = ({ regions }) => {
  return (
    <select className="select" name="" id="">
      <option value="" selected disabled>
        Filter by Region
      </option>
      {regions.map((region) => (
        <option value={region}>{region}</option>
      ))}
    </select>
  );
};

export default SelectBox;
