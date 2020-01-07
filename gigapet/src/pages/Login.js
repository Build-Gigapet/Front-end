import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { useAuth } from "../context/auth";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    Axios.post("https://build-gigapet.herokuapp.com/api/auth/login/", {
      userName,
      password,
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.token);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input
            type="text"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
            name="name"
            id="userName"
            placeholder="Enter Your Username"
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </FormGroup>
        <Button onClick={postLogin}>Submit</Button>
      </Form>

      <Link to="/signup">Need an account?</Link>

      {isError && "The username or password provided were incorrect!"}
    </div>
  );
}

export default Login;
