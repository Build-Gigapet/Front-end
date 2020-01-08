
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp';
import UpdateForm from './components/UpdateForm';
import Parent from './components/Parent';
import Register from "./components/Register";
import { createBrowserHistory } from 'history';
// import './App.css';

const history = createBrowserHistory();
function App() {

  // const removeItem = id =>{
  //   setChildren(children.filter(item =>item.id !== id))
  // }
  return (
    <Router history={history}>
      <div className='App'>


        <ul>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/auth/register'>Register</Link>
          </li>
          <Link to="/dashboard">Dashboard</Link>
          <li>
            <Link to='/auth/:id'>Update Form</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li><Link to='/parent'>Parent</Link></li>
        </ul>
        <Switch>
          {/* <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path='/protected' component={Parent} /> */}
          <Route exact path='/parent' component={Parent} />
          <Route path='/signup' component={SignUp} />
          <Route path='/auth/register' component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/" component={SignUp} /> */}
          <Route
            path={`/auth/:id`}
            render={props => {
              return (
                <UpdateForm
                  {...props}
                  history={history}

                />
              );
            }}
          />
          <Route path={'/login'} component={Login} />


        </Switch>







      </div>
    </Router>
  );
}

export default App;
