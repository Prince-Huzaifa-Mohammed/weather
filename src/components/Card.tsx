import { Link } from "react-router-dom";
import { CardProps } from "../interfaces/interfaces";
import "../index.css";

const Card = ({ country }: CardProps) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="card__body">
        <Link to={`/country/${country.name}`}>
          <h3>{country.name}</h3>
        </Link>
        <div className="country__info">
          <span className="label">Population: </span>
          <span className="content">{country.population.toLocaleString()}</span>
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
