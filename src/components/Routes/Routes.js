import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App/App'
import SignUpPanel from '../SignUpPanel/SignUpPanel'
import Home from '../Home/Home'
import BoardContainer from '../../containers/BoardContainer/BoardContainer'
import LoginPanelContainer from '../../containers/LoginPanelContainer/LoginPanelContainer'
import SignUpPanelContainer from '../../containers/SignUpPanelContainer/SignUpPanelContainer'

class Routes extends React.Component {
  render() {
    return (
   <Router>
    <div>
      <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/home' component={ Home } />
      <Route path='/login' render={() => ( <LoginPanelContainer   />  )} />
      <Route path='/signup'  render={() => ( <SignUpPanelContainer   />  )} />
      <Route path='/board' component={ BoardContainer } />
      </Switch>
    </div>
  </Router>
    )
  };
}

export default Routes;
