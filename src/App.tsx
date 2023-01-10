import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "./pages/Country";
import Main from "./pages/Main";
import "./index.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
