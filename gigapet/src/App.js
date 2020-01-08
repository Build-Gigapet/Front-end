<<<<<<< HEAD

import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import React, { useState } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp';
import UpdateForm from './components/UpdateForm';
import Parent from './components/Parent';
import { createBrowserHistory } from 'history';
=======
import React, { useState } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
// import Login from "./components/Login";
import UpdateForm from "./components/UpdateForm";
// import Parent from "./components/Parent";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
>>>>>>> Michael-Phelps
// import './App.css';

const history = createBrowserHistory();
function App() {
  const [saveList, setSaveList] = useState([]);
  const [users, setUsers] = useState([]);
  const addToSaveList = user => {
    setSaveList([...saveList, user]);
  };
  const updateUsers = user => {
    console.log(user);
    setUsers({ users: [users, user] });
  };
  // const removeItem = id =>{
  //   setChildren(children.filter(item =>item.id !== id))
  // }
  return (
    <Router history={history}>
<<<<<<< HEAD
      <div className='App'>


        <ul>
=======
      <div className="App">
        <Header />
        {/* <ul>
>>>>>>> Michael-Phelps
          <li>
            <Link to='/'>Sign Up</Link>
          </li>
          <Link to="/dashboard">Dashboard</Link>
          <li>
            <Link to='/auth/:id'>Update Form</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
<<<<<<< HEAD
          <li><Link to='/protected'>Parent</Link></li>
        </ul>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path='/protected' component={Parent} />
          <Route exact path='/protected' component={Parent} />
          <Route path='/' component={SignUp} />
          <Route exact path="/protected" component={Dashboard} />
          {/* <Route exact path="/" component={SignUp} /> */}
          <Route
            path={`/auth/:id`}
            render={props => {
              return (
                <UpdateForm
                  {...props}
                  history={history}
                  updateUsers={updateUsers}
                />
              );
            }}
          />
          <Route path={'/login'} component={Login} />


        </Switch>





=======
          {/* <li><Link to="protected">Parent</Link></li>
        </ul> */}
        {/* <Route exact path="/" component={Login} /> */}
        <Route path="/register" component={SignUp} />
        <Route
          path={`/auth/:id`}
          render={props => {
            return (
              <UpdateForm
                {...props}
                history={history}
                updateUsers={updateUsers}
              />
            );
          }}
        />
        {/* <Route path={"/login"} component={Login} /> */}
        {/* <Switch>
          <PrivateRoute path="/protected" component={Parent} />
          <Route exact path="/protected" component={Parent} />
>>>>>>> Michael-Phelps


      </div>
    </Router>
  );
}

export default App;
