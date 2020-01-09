import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
import "../pages/styles/header.css";
import "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../components/Dashboard";
import Parent from "./Parent";
import UpdateForm from "./UpdateForm";
import PrivateRoute from "./PrivateRoute";


//TODO: Still need to hook conditional statements into the navlinks to toggle display:none based on login/registered state.

const Header = function (props) {
  useEffect(() => {
    //   // Update the document title using the browser API
    //   // document.title = `You clicked ${count} times`;
    if (localStorage.getItem("ID") !== -1) {
      console.log(localStorage.getItem("name"));
      document.getElementById("login-button").href = "/dashboard";
      document.getElementById("login-button").innerHTML = localStorage.getItem(
        "name",
      );
      document.getElementById("register-button").style.display = "none";
    }
  }, []);

  const logout = () => {
    localStorage.setItem("ID", -1);
    localStorage.setItem("name", undefined);
    localStorage.setItem("token", undefined);
  };

  return (
    <div>
      <div className="header">
        <div className="title">
          <h1>GigaPet</h1>
          <img src={require("../pages/styles/images/gigapet.png")} alt="" />
        </div>
        <nav className="navLinks">
          <a href="/home">Home</a>
          <a href="/sign-up">SignUp</a>
          <Link to="/login">Login</Link>


          <a href="/dashboard">Dashboard</a>
          {/* 
          <a href="/update">UpdateForm</a> */}
          <a href="/parent">Parent</a>


          <Switch>
            <PrivateRoute path="/protected" component={Parent} />
            <Route exact path="/protected" component={Parent} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/parent' component={Parent} />
            {/* <Route path='/update' component={UpdateForm} /> */}
            <Route path='/login' component={Login} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
          {/* <a href="/dashboard">Dashboard</a> */}
          <a id="register-button" href="/register">
            Register
          </a>
          <a id="login-button" href="/login">
            Log In
          </a>
          <a href="/" onClick={logout}>
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
{/* <Route exact path="/" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route
          path={`/auth/:id`}
          render={props => {
            return (
              <UpdateForm
                {...props}
                history={history}
                updateUsers={updateUsers}
              />
            );
          }}
        />
        {/* <Route path={"/login"} component={Login} /> */}
