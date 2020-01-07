import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = props => {
  const [login, setLogin] = useState({
    name: '',
    password: ''
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('https://build-gigapet.herokuapp.com/api/auth/login', login)
      .then(result => {
        console.log(result);
        localStorage.setItem('ID', result.data.id);
        localStorage.setItem('token', result.data.token);
        window.location = '/dashboard';
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
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
        </Form>
      </div>
    </div>
  );
};

export default Login;
