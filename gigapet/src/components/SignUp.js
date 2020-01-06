
import React from 'react';
import axiosWithAuth from "../axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }, isFetching: false
    };
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    signup = e => {
        e.preventDefault();
        axiosWithAuth().post("http://dummy.restapiexample.com/api/v1/create", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("protected")

            })
            .catch(err => console.log(err))
    };
    render() {
        return (
            <div className="form">
                <h1>Welcome to GigaPet</h1>
                <Form onSubmit={this.signup}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            style={{ width: 500 }}
                            type="text"
                            className="username"
                            name="username"
                            value={this.state.credentials.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input style={{ width: 500 }}
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="success">SignUp</Button>
                    {this.state.isFetching && "signing up"}
                </Form>

            </div>
        )
    }
}
export default SignUp;