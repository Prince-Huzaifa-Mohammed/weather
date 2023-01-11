import * as React from "react";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchAndFilterBars from "../components/SearchAndFilterBars";
import axios from "axios";
import { Country } from "../interfaces/interfaces";
// import { getData } from "../utils/utils";

const Main = () => {
  const url: string = "https://restcountries.com/v2/all";
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Country[]>(url);

        setData(response.data);
      } catch (e) {
        return e;
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <main className="container">
      <SearchAndFilterBars />
      <CardList countries={data} />
    </main>
  );
};

export default Main;
