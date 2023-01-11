import * as React from "react";
import { CardListProps } from "../interfaces/interfaces";
import Card from "./Card";

const CardList: React.FC<CardListProps> = ({ countries }) => {
  return (
    <div className="countries-grid">
      {countries.map((country) => (
        <Card country={country} key={country.name} />
      ))}
    </div>
  );
};

export default CardList;
