import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Country } from "../interfaces/interfaces";

// interface SingleCountryInterface {
//   countries: Country[];
// }

const SingleCountry = () => {
  const { name } = useParams();
  const countries = useSelector((state: RootState) => state.countries.value);

  const country = countries?.find((element) => {
    return element.name === name;
  });

  const borders: string[] | undefined = country?.borders;
  let borderNames: Country[] = [];
  if (borders !== undefined && borders.length > 0) {
    for (let i = 0; i < borders.length; i++) {
      const border = countries?.find(
        (country) => country.alpha3Code === borders[i]
      );
      if (border !== undefined) borderNames.push(border);
    }
  }

  // console.log(borderNames);

  return (
    <main className="country__section container">
      <Link to="/">
        <button>
          <i className="fa fa-long-arrow-left arrow"></i>
          Back
        </button>
      </Link>

      <div className="country__content">
        <div className="country__flag">
          <img src={country?.flag} alt={country?.name} />
        </div>

        <div className="country__bio">
          <div className="country__name">
            <h2>{country?.name}</h2>
          </div>
          <div className="country__bio--details">
            <div className="left">
              <div className="country__others">
                <div className="country__info">
                  <span className="label">Native Name:</span>
                  <span className="content">{country?.nativeName}</span>
                </div>
                <div className="country__info">
                  <span className="label">Population: </span>
                  <span className="content">
                    {country?.population.toLocaleString()}
                  </span>
                </div>
                <div className="country__info">
                  <span className="label">Region: </span>
                  <span className="content">{country?.region}</span>
                </div>
                <div className="country__info">
                  <span className="label">Sub Region: </span>
                  <span className="content">{country?.subregion}</span>
                </div>
                <div className="country__info">
                  <span className="label">Capital: </span>
                  <span className="content">{country?.capital}</span>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="country__info">
                <span className="label">Top Level Domain: </span>
                <span className="content">{country?.topLevelDomain}</span>
              </div>
              <div className="country__info">
                <span className="label">Currencies: </span>
                <span className="content">{country?.currencies[0].name}</span>
              </div>
              <div className="country__info">
                <span className="label">Languages: </span>
                <span className="content">{country?.languages[0].name}</span>
              </div>
            </div>
          </div>

          <div className="borders">
            {country?.borders && (
              <div className="border__info">
                <span className="label">Border Countries: </span>
                <div className="border__countries">
                  {borderNames?.map((border) => (
                    <span className="badge" key={border.name}>
                      {border.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleCountry;
