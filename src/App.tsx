import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Country from "./pages/Country";
import CountryDetails from "./pages/Country";
import Main from "./pages/Main";
import "./index.css";
import Navbar from "./components/Navbar";
import { useLocalStorage } from "usehooks-ts";
import { createContext } from "react";
import { SearchContextInterface } from "./interfaces/interfaces";

export const SearchContext = createContext<SearchContextInterface | null>(null);

const App: React.FC = () => {
  const [theme, setTheme] = useLocalStorage("light", true);
  const [searchText, setSearchText] = useState("");
  const [selectText, setSelectText] = useState("");

  const toggleTheme = () => {
    setTheme((prevValue: boolean) => !prevValue);
  };

  return (
    <div className="App" data-theme={theme ? "light" : "dark"}>
      <SearchContext.Provider
        value={{ searchText, setSearchText, selectText, setSelectText }}
      >
        <Router>
          <Navbar onToggle={toggleTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/country/:name" element={<CountryDetails />} />
          </Routes>
        </Router>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
