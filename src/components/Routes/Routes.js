import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App/App'
import SignUpPanel from '../SignUpPanel/SignUpPanel'
import Home from '../Home/Home'
import LoginPanel from '../LoginPanel/LoginPanel'

class Routes extends React.Component {
  render() {
    return (
   <Router>
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/home' component={ Home } />
      <Route path='/login' component={ LoginPanel } />
      <Route path='/signup' component={ SignUpPanel } />
    </div>
  </Router>
    )
  };
}

export default Routes;
