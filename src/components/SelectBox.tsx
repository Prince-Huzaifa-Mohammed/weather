import * as React from "react";

const SelectBox = () => {
  return (
    <select className="select" name="" id="">
      <option value="" selected disabled>
        Filter by Region
      </option>
      <option value="">Africa</option>
      <option value="">America</option>
      <option value="">Asia</option>
      <option value="">Europe</option>
      <option value="">Oceania</option>
    </select>
  );
};

export default SelectBox;
