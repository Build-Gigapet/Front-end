import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './pages/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';


import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import UpdateForm from './components/UpdateForm';
import App from "./App";
import Dashboard from "./components/Dashboard";
import Parent from './components/Parent';
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/auth/register'>Register</Link>
        </li>
        <Link to="/protected">Dashboard</Link>
        <li>
          <Link to='/auth/:id'>Update Form</Link>
        </li>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
        <li><Link to='/parent'>Parent</Link></li>
      </ul>

      {/*  TODO: Replace APP with HOME/Marketing 
<Route exact path='/' component={App} /> */ }
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/parent' component={Parent} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path='/auth/:id' component={UpdateForm} />



      />

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
