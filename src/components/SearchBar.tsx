import * as React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <i className="fa fa-search search__icon"></i>
      <input
        type="text"
        className="search__input"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default SearchBar;
