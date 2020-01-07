import React, { useState } from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import UpdateForm from "./components/UpdateForm";
// import Parent from "./components/Parent";
import { createBrowserHistory } from "history";
// import './App.css';

const history = createBrowserHistory();
function App() {
  const [saveList, setSaveList] = useState([]);
  const [users, setUsers] = useState([]);
  const addToSaveList = user => {
    setSaveList([...saveList, user]);
  };
  const updateUsers = (user) => {
    console.log(user)
    setUsers({ users: [users, user] })
  }
  // const removeItem = id =>{
  //   setChildren(children.filter(item =>item.id !== id))
  // }
  return (

    <Router history={history}>
      <div className="App">
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/auth/:id">Update Form</Link></li>
          {/* <li><Link to="protected">Parent</Link></li> */}
        </ul>
        <Route exact path="/" component={SignUp} />
        <Route path={`/auth/:id`} render={props => {
          return <UpdateForm {...props} history={history} updateUsers={updateUsers} />
        }}
        />

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
