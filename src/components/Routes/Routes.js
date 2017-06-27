import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App/App'
import SignUpPanel from '../SignUpPanel/SignUpPanel'
import HomeContainer from '../../containers/HomeContainer/HomeContainer'
import BoardContainer from '../../containers/BoardContainer/BoardContainer'
import BoardsPanelContainer from '../../containers/BoardsPanelContainer/BoardsPanelContainer'

import LoginPanelContainer from '../../containers/LoginPanelContainer/LoginPanelContainer'
import SignUpPanelContainer from '../../containers/SignUpPanelContainer/SignUpPanelContainer'

class Routes extends React.Component {
  render() {
    return (
   <Router>
    <div>
      <Switch>
      <Route exact path='/' component={ HomeContainer } />
      <Route path='/home' component={ HomeContainer } />
      <Route path='/login' render={() => ( <LoginPanelContainer   />  )} />
      <Route path='/signup'  render={() => ( <SignUpPanelContainer   />  )} />
      <Route exact path='/board' component={ BoardsPanelContainer } />
      <Route path='/board/:id' component={ BoardContainer } />
      </Switch>
    </div>
  </Router>
    )
  };
}

export default Routes;
