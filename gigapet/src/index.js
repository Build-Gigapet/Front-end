import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './pages/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';


// import PrivateRoute from './components/PrivateRoute';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import UpdateForm from './components/UpdateForm';
import App from "./App";
// const routing = (
//   <Router>
//     <div>
// TODO: Replace APP with HOME/Marketing */ }
// <Route exact path='/' component={App} /> */ }
//  <Route exact path='/sign-up' component={SignUp} />
//       <Route exact path='/login' component={Login} />
//     </div>
//   </Router>
// ); 

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
