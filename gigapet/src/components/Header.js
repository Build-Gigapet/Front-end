import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles/header.css";

const Header = function() {
  return (
    <div className="header">
      <div className="title">
        <h1>GigaPet</h1>
        <img src={require("../pages/styles/images/gigapet.png")} />
      </div>
      <nav className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Log Out</Link>
      </nav>
    </div>
  );
};

export default Header;
