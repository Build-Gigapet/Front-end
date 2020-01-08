
// import React, { useState } from 'react';
// import axiosWithAuth from "../axiosWithAuth";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const Register = props => {
//     const [register, setRegister] = useState({
//         name: "",
//         email: "",
//         password: "",
//     })


//     const handleChange = e => {
//         setRegister({
//             ...register,
//             [e.target.name]: e.target.value

//         });
//     };
//     const onSubmit = e => {
//         e.preventDefault();
//         axiosWithAuth().post(`https://build-gigapet.herokuapp.com/api/auth/register`, register)
//             .then(res => {
//                 localStorage.setItem("token", res.data.token);
//                 props.history.push('/login')

//             })
//             .catch(err => console.log(err))
//     };

//     return (
//         <div className="form">
//             <h1>Welcome to GIGAPET</h1>
//             <Form onSubmit={onSubmit}>
//                 <FormGroup>
//                     <Label for="name">name</Label>
//                     <Input type="text"
//                         className="name"
//                         name="name"
//                         value={register.name} onChange={handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="email">email</Label>
//                     <Input type="email"
//                         className="email"
//                         name="email"
//                         value={register.email} onChange={handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="password">Password</Label>
//                     <Input type="password"
//                         name="password"
//                         value={register.password}
//                         onChange={handleChange} />
//                 </FormGroup>
//                 <Button color="success">Register</Button>

//             </Form>

//         </div>
//     )
// }

// export default Register;