import * as React from "react";
import { CardListProps } from "../interfaces/interfaces";
import Card from "./Card";
import { useContext } from "react";
import { SearchContext } from "../App";

const CardList: React.FC<CardListProps> = ({ countries }) => {
  const searchContext = useContext(SearchContext);

  return (
    <div className="countries-grid">
      {countries
        .filter((country) => {
          return searchContext?.searchText.toLowerCase() === ""
            ? country
            : country.name
                .toLowerCase()
                .includes(searchContext!.searchText.toLowerCase());
        })
        .filter((country) => {
          return searchContext?.selectText.toLowerCase() === ""
            ? country
            : country.region
                .toLowerCase()
                .includes(searchContext!.selectText.toLowerCase());
        })
        .map((country) => (
          <Card country={country} key={country.name} />
        ))}
    </div>
  );
};

export default CardList;
