import React from 'react';
import { render } from 'react-dom';
import bootstrapStyle from '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import Routes from '../Routes/Routes'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Routes/>
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));
