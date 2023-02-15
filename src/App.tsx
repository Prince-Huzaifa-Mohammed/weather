import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "./theme/theme";
import GlobalStyles from "./components/styled/GlobalStyles";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import Auth from "./components/Auth/Auth";
import Country from "./pages/Country";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/login"
            element={
              <Auth>
                <LoginPage />
              </Auth>
            }
          />
          <Route
            path="/register"
            element={
              <Auth>
                <Register />
              </Auth>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Auth>
                <ForgotPassword />
              </Auth>
            }
          />
          <Route
            path="/reset-password"
            element={
              <Auth>
                <ResetPassword />
              </Auth>
            }
          />
          <Route
            path="/change-password"
            element={
              <Auth>
                <ChangePassword />
              </Auth>
            }
          />
          <Route
            path="/country"
            element={
              <Auth>
                <Country />
              </Auth>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
