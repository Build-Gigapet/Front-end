
import React, { useState } from 'react';
import axiosWithAuth from "../axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const SignUp = props => {
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: ""
    })


    const handleChange = e => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value

        });
    };
    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('https://build-gigapet.herokuapp.com/api/auth/register', signup)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                this.props.history.push('/login')

            })
            .catch(err => console.log(err))
    };


    return (
        <div className="form">
            <h1>Welcome to GigaPet</h1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="name">name</Label>
                    <Input
                        style={{ width: 500 }}
                        type="text"
                        className="name"
                        name="name"
                        placeholder="name"
                        value={signup.name} onChange={handleChange} />

                    <Label for="username">Email</Label>
                    <Input
                        style={{ width: 500 }}
                        type="text"
                        className="email"
                        name="email"
                        placeholder="email"
                        value={signup.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input style={{ width: 500 }}
                        type="password"
                        name="password"
                        placeholder="password"
                        value={signup.password}
                        onChange={handleChange} />
                </FormGroup>
                <Button color="success">SignUp</Button>
                {signup.isFetching && "signing up"}
            </Form>

        </div>
    );
};

export default SignUp;