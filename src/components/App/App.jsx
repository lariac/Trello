import React from 'react';
import { render } from 'react-dom';
import customBootstrap from '../../scss/custom-bootstrap.scss'
import Routes from '../Routes/Routes'

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));
