import React from "react";
import { Link } from "react-router-dom";

const Header = function() {
  return (
    <div className="header">
      <h1>GigaPet</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
};

export default Header;
