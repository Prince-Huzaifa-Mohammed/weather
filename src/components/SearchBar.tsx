import * as React from "react";
import { SearchBarProps } from "../interfaces/interfaces";
import { useContext } from "react";
import { SearchContext } from "../App";

const SearchBar: React.FC<SearchBarProps> = ({ placeholderText }) => {
  const searchContext = useContext(SearchContext);
  // console.log(searchContext?.searchText);
  return (
    <div className="search">
      <i className="fa fa-search search__icon"></i>
      <input
        type="text"
        className="search__input"
        placeholder={placeholderText}
        onChange={(e) => {
          searchContext?.setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
