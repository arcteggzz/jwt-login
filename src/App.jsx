import { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import LandingPage from "./pages/LandingPage";
import RequireAuth from "./utils/RequireAuth";
import RandomPublicPage from "./pages/RandomPublicPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AdminLoginPage />} />
        <Route path="/random-public-page" element={<RandomPublicPage />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          {/* Display list of admins on the mongo database on this page */}
          <Route path="/dashboard" element={<AdminDashboardPage />} />
          <Route path="/signup" element={<AdminSignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
