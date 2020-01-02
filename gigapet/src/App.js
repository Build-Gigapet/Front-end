import React from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
// import Parent from "./components/Parent";
import { createBrowserHistory } from "history";
import './App.css';

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          {/* <li><Link to="protected">Parent</Link></li> */}
        </ul>
        <Route exact path="/" component={SignUp} />

        {/* <Switch>
          <PrivateRoute path="/protected" component={Parent} />
          <Route exact path="/protected" component={Parent} />
          <Route path="/signup" component={SignUp} />

        </Switch> */}


      </div>
    </Router>
  );
}

export default App;
