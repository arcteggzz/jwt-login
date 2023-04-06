import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <div className="container">
        <nav className="nav_container">
          <Link to="/" className="link">
            Landing Page
          </Link>
          <Link to="/random-public-page" className="link">
            Random PG
          </Link>
          <Link to="/signup" className="link">
            CreateAccount
          </Link>
          <Link to="/login" className="link">
            AdminLogin
          </Link>
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
          <Link to="/update-password" className="link">
            UpdatePassword
          </Link>
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
