import React from 'react';
import { render } from 'react-dom';
import customBootstrap from '../../scss/custom-bootstrap.scss'
import mainStyle from '../../scss/index.scss'
import Routes from '../Routes/Routes'
import { Provider } from 'react-redux'
import store from '../../redux/store'

class App extends React.Component {
  render() {

    return (
      <div>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));
