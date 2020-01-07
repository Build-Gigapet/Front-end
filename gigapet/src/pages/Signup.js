import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Signup() {
  return (
    <Form>
      <FormGroup>
        <Label for="userName">Username</Label>
        <Input
          type="text"
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
          id="userEmail"
          placeholder="Enter a Valid Email Address"
        />
      </FormGroup>
      <FormGroup>
        <Label for="userPassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="userPassword"
          placeholder="Enter a Valid Password"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Signup;
