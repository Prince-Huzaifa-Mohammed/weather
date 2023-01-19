// import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { Country } from "../interfaces/interfaces";
import { getData } from "../utils/utils";

const CountryDetails = () => {
  const { name } = useParams();
  const [data, setData] = React.useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const url = `https://restcountries.com/v2/name/${name}`;

  React.useEffect(() => {
    try {
      getCountry();
    } catch (e) {
      setError("Something went wrong. Please try again later!");
      setLoading(false);
    }
    // axios
    //   .get<Country[]>(`https://restcountries.com/v2/name/${name}`)
    //   .then((response) => {
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((e) => {
    //     setError("Something went wrong. Please try again later!");
    //     setLoading(false);
    //   });
  }, []);

  const getCountry = async () => {
    const country = await getData(url);
    setData(country);
    setLoading(false);
  };

  return (
    <main className="country__section container">
      <Link to="/">
        <button>
          <i className="fa fa-long-arrow-left arrow"></i>
          back
        </button>
      </Link>

      {error && <h3 className="loading">{error}</h3>}

      {loading && (
        <div className="loading">
          <BallTriangle
            height={150}
            width={150}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      )}

      {data && (
        <div className="country__content">
          <div className="country__flag">
            <img src={data![0].flag} alt={data![0].name} />
          </div>

          <div className="country__bio">
            <div className="country__name">
              <h2>{data![0].name}</h2>
            </div>
            <div className="country__bio--details">
              <div className="left">
                <div className="country__others">
                  <div className="country__info">
                    <span className="label">Native Name: </span>
                    <span className="content">{data![0].nativeName}</span>
                  </div>
                  <div className="country__info">
                    <span className="label">Population: </span>
                    <span className="content">{data![0].population}</span>
                  </div>
                  <div className="country__info">
                    <span className="label">Region: </span>
                    <span className="content">{data![0].region}</span>
                  </div>
                  <div className="country__info">
                    <span className="label">Sub Region: </span>
                    <span className="content">{data![0].subregion}</span>
                  </div>
                  <div className="country__info">
                    <span className="label">Capital: </span>
                    <span className="content">{data![0].capital}</span>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="country__info">
                  <span className="label">Top Level Domain: </span>
                  <span className="content">{data![0].topLevelDomain}</span>
                </div>
                <div className="country__info">
                  <span className="label">Currencies: </span>
                  <span className="content">{data![0].currencies[0].name}</span>
                </div>
                <div className="country__info">
                  <span className="label">Languages: </span>
                  <span className="content">{data![0].languages[0].name}</span>
                </div>
              </div>
            </div>

            <div className="borders">
              {data[0].borders && (
                <div className="country__info">
                  <span className="label">Border Countries: </span>
                  {data![0].borders.map((border) => (
                    <span className="badge" key={border}>
                      {border}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CountryDetails;
