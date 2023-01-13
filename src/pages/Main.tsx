import * as React from "react";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchAndFilterBars from "../components/SearchAndFilterBars";
import axios from "axios";
import { Country } from "../interfaces/interfaces";
import { BallTriangle } from "react-loader-spinner";

const Main = () => {
  const url: string = "https://restcountries.com/v2/all";
  const [data, setData] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Country[]>(url);

        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError("Unable to fetch data. Please try again later");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container">
      <SearchAndFilterBars />
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
      {data && <CardList countries={data} />}
      {error && <h3 className="loading">{error}</h3>}
    </main>
  );
};

export default Main;
