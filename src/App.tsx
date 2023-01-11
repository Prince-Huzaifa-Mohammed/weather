import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "./pages/Country";
import Main from "./pages/Main";
import "./index.css";
import Navbar from "./components/Navbar";
import { useLocalStorage } from "usehooks-ts";

const App: React.FC = () => {
  const [theme, setTheme] = useLocalStorage("light", true);

  const toggleTheme = () => {
    setTheme((prevValue: boolean) => !prevValue);
  };

  return (
    <div className="App" data-theme={theme ? "light" : "dark"}>
      <Router>
        <Navbar onToggle={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
