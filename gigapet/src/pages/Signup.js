import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import Axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, Error } from "../components/authforms";

function Signup() {
  const [isRegistered, setisRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignup() {
    if (verifyPassword === password) {
      Axios.post("https://build-gigapet.herokuapp.com/api/auth/register", {
        name,
        password,
        email,
      })
        .then(result => {
          console.log(result);
          if (result.status === 201) {
            setAuthTokens(result.token);
            setisRegistered(true);
          } else {
            setIsError(true);
          }
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
        });
    } else {
      setIsError(true);
    }

    if (isRegistered) {
      return <Redirect to="/login" />;
    }
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
            id="userName"
            placeholder="Enter a Valid Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            id="userEmail"
            placeholder="Enter a Valid Email Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            id="userPassword"
            placeholder="Enter a Valid Password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userConfirmPassword">Verify Your Password</Label>
          <Input
            type="password"
            name="ConfirmPassword"
            value={verifyPassword}
            onChange={e => {
              setVerifyPassword(e.target.value);
            }}
            id="userConfirmPassword"
            placeholder="Enter your Password"
          />
        </FormGroup>
        <Button onClick={postSignup}>Submit</Button>
      </Form>
      {isError && (
        <Error>Please Check the Information you Entered and Try Again</Error>
      )}
    </Card>
  );
}

export default Signup;
