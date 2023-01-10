import * as React from "react";
import SearchBar from "./SearchBar";
import SelectBox from "./SelectBox";

const SearchAndFilterBars = () => {
  return (
    <div className="search-and-filter-bars">
      <SearchBar /> <SelectBox />
    </div>
  );
};

export default SearchAndFilterBars;
