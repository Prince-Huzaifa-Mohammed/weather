import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import Card from "../components/Card";
import { updateCountries } from "../features/countriesSlice";
import "../index.css";
import { Country } from "../interfaces/interfaces";
import { BallTriangle } from "react-loader-spinner";

// interface AllCountriesInterface {
//   filteredCountries: Country[];
//   setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
// }

const AllCountries = () => {
  const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const countries = useSelector((state: RootState) => state.countries.value);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(
    null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // if (countries?.length !== 0) {
    //   setIsLoading(false);
    // }
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");

        if (!response.ok) {
          throw new Error();
        }

        const countries = await response.json();
        dispatch(updateCountries(countries));
        setFilteredCountries(countries);
        setIsLoading(false);
      } catch (err) {
        setError("Something went wrong. Please try again later");
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [dispatch]);

  useEffect(() => {
    const filtered = countries
      ?.filter((country) => {
        if (searchText === "") {
          return country;
        } else {
          return country.name.toLowerCase().includes(searchText.toLowerCase());
        }
      })
      .filter((el) => {
        if (filterByRegion === "") {
          return el;
        } else {
          return el.region === filterByRegion;
        }
      });

    setFilteredCountries(filtered!);
  }, [searchText, filterByRegion]);

  // console.log(searchText);

  return (
    <main className="container">
      <div className="search-and-filter-bars">
        <div className="search">
          <i className="fa fa-search search__icon"></i>
          <input
            type="text"
            className="search__input"
            placeholder="Search for a country..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <select
          className="select"
          onChange={(e) => setFilterByRegion(e.target.value)}
        >
          <option value="" selected>
            Filter by Region
          </option>
          {regions.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="results-section">
        <div className="loader-and-error">
          {isLoading && !filteredCountries && (
            <div className="">
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
          {error && <h3>{error}</h3>}
        </div>
        <div className="countries-grid ">
          {filteredCountries && filteredCountries.length === 0 ? (
            <h1>No Results Found!</h1>
          ) : (
            filteredCountries?.map((country) => (
              <Card country={country} key={country.name} />
            ))
          )}

          {/* {filteredCountries && filteredCountries.length > 0 ? (
          filteredCountries?.map((country) => (
            <Card country={country} key={country.name} />
          ))
        ) : (
          <h1>No Results</h1>
        )} */}
        </div>
      </div>
    </main>
  );
};

export default AllCountries;
