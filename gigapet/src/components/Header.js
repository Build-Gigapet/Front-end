import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "../pages/styles/header.css";
import "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../components/Dashboard";

//TODO: Still need to hook conditional statements into the navlinks to toggle display:none based on login/registered state.

const Header = function(props) {
  const logout = () => {
    localStorage.clear();
    // localStorage.setItem("ID", -1);
    // localStorage.setItem("name", undefined);
    // localStorage.setItem("token", undefined);
  };

  useEffect(() => {
    if (localStorage.getItem("ID") != undefined) {
      // console.log(localStorage.getItem("name"));
      console.log("asdklfjdasfl: " + localStorage.getItem("ID"));
      document.getElementById("login-button").href = "/login";
      document.getElementById("login-button").innerHTML = localStorage.getItem(
        "name",
      );
      document.getElementById("register-button").style.display = "none";
    }
  });

  return (
    <div>
      <div className="header">
        <div className="title">
          <h1>GigaPet</h1>
          <img src={require("../pages/styles/images/gigapet.png")} alt="" />
        </div>
        <nav className="navLinks">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a id="register-button" href="/register">
            Register
          </a>
          <a id="login-button" href="/login">
            Log In
          </a>
          <a
            href="/"
            onClick={() => {
              this.logout();
            }}
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
