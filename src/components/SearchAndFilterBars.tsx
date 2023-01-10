import * as React from "react";
import SearchBar from "./SearchBar";
import SelectBox from "./SelectBox";

const SearchAndFilterBars = () => {
  const regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div className="search-and-filter-bars">
      <SearchBar placeholderText="Search for a country" />
      <SelectBox regions={regions} />
    </div>
  );
};

export default SearchAndFilterBars;
