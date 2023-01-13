import * as React from "react";
import { SelectBoxProps } from "../interfaces/interfaces";
import { useContext } from "react";
import { SearchContext } from "../App";

const SelectBox: React.FC<SelectBoxProps> = ({ regions }) => {
  const searchContext = useContext(SearchContext);

  return (
    <select
      className="select"
      name=""
      id=""
      onChange={(e) => searchContext?.setSelectText(e.target.value)}
    >
      <option value="" selected>
        Filter by Region
      </option>
      {regions.map((region) => (
        <option value={region}>{region}</option>
      ))}
    </select>
  );
};

export default SelectBox;
