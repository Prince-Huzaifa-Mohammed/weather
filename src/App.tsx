import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllCountries from "./pages/AllCountries";
import SingleCountry from "./pages/SingleCountry";
import { useLocalStorage } from "usehooks-ts";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useLocalStorage("light", true);

  const toggleTheme = () => {
    setTheme((prevValue: boolean) => !prevValue);
  };

  return (
    <div className="App" data-theme={theme ? "light" : "dark"}>
      <Router>
        <Navbar onToggle={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:name" element={<SingleCountry />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
