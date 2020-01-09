import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./pages/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
// import App from "./App";
import Parent from "./components/Parent";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UpdateForm from "./components/UpdateForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

const routing = (
  <Router>
    <div>
      <Header />
      {/* TODO: Replace APP with HOME/Marketing */}
      {/* <Route exact path="/" component={App} /> */}


      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/parent" component={Parent} />


    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();