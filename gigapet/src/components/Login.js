import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = props => {
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://build-gigapet.herokuapp.com/api/auth/login", login)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        window.location("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <FormGroup>
          <Label for="username">name</Label>
          <Input
            style={{ width: 500 }}
            type="text"
            className="name"
            name="name"
            placeholder="name"
            value={login.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            style={{ width: 500 }}
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="success">Login</Button>
        {login.isFetching && "Please Wait"}
      </form>
    </div>
  );
};

export default Login;
