import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { useAuth } from "../context/auth";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    Axios.post("https://build-gigapet.herokuapp.com/api/auth/login/", {
      name,
      password,
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
      }
    });
  }
  return (
    <Form>
      <FormGroup>
        <Label for="name">Username</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter a Valid Username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter a Valid Email Address"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter a Valid Password"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Login;
