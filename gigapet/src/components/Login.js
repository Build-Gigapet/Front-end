import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const Login = props => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.email]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth
      .post("https://build-gigapet.herokuapp.com/api/auth/login", login)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return <div>Login Form</div>;
};

export default Login;
