<<<<<<< HEAD
import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = props => {
  const [login, setLogin] = useState({
    name: '',
    password: ''
=======
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = props => {
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    if (localStorage.getItem("ID") !== -1) {
      window.location = "/dashboard";
    }
>>>>>>> Michael-Phelps
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
<<<<<<< HEAD
    axiosWithAuth().post('https://build-gigapet.herokuapp.com/api/auth/login', login)
      .then(result => {
        console.log(result);
        localStorage.setItem('ID', result.data.id);
        localStorage.setItem('token', result.data.token);
        window.location = '/dashboard';
=======
    console.log(";askldfjasdkl;sdjfsdjfklsd");
    axiosWithAuth()
      .post("https://build-gigapet.herokuapp.com/api/auth/login", login)
      .then(result => {
        console.log(result);
        localStorage.setItem("ID", result.data.id);
        localStorage.setItem(
          "name",
          document.getElementById("username-input").value,
        );
        localStorage.setItem("token", result.data.token);
        window.location = "/dashboard";
>>>>>>> Michael-Phelps
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
<<<<<<< HEAD
    <div id='content-wrapper' style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1>Welcome back to GigaPet</h1>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for='username'>Username</Label>
            <Input
              style={{ width: 500 }}
              type='text'
              className='name'
              name='name'
              placeholder='Username'
              value={login.username} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input style={{ width: 500 }}
              type='password'
              name='password'
              placeholder='password'
              value={login.password}
              onChange={handleChange} />
          </FormGroup>
          <Button color='success'>Login</Button>
          {login.isFetching && 'logging in'}
=======
    <div
      id="content-wrapper"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <div>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              style={{ width: 500 }}
              id="username-input"
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
          <Button color="success">Log In</Button>
          {login.isFetching && "Please Wait"}
>>>>>>> Michael-Phelps
        </Form>
      </div>
    </div>
  );
};

export default Login;
