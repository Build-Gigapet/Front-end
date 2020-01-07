import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { useAuth } from "../context/auth";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Error, Card } from "../components/authforms";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    Axios.post("https://build-gigapet.herokuapp.com/api/auth/login/", {
      name,
      password,
    })
      .then(result => {
        console.log(result);
        if (result.status === 201) {
          setAuthTokens(result.data.token);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Form>
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            name="name"
            id="name"
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

      <Link to="/signup">Don't have an acount?</Link>

      {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )}
    </Card>
  );
}

export default Login;
