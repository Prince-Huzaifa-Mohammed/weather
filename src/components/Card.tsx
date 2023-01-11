import * as React from "react";
import { CardProps } from "../interfaces/interfaces";

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="card__body">
        <a href="http://google.com">
          <h3>{country.name}</h3>
        </a>
        <div className="country__info">
          <span className="label">Population: </span>
          <span className="content">{country.population}</span>
        </div>
        <div className="country__info">
          <span className="label">Region: </span>
          <span className="content">{country.region}</span>
        </div>
        <div className="country__info">
          <span className="label">Capital: </span>
          <span className="content">{country.capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
