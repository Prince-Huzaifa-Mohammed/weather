import * as React from "react";
import { SearchBarProps } from "../interfaces/interfaces";

const SearchBar: React.FC<SearchBarProps> = ({ placeholderText }) => {
  return (
    <div className="search">
      <i className="fa fa-search search__icon"></i>
      <input
        type="text"
        className="search__input"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default SearchBar;
