import React from 'react';
import loginStyle from './_Login.scss'

class LoginPanel extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="section-wrapper">
            <div className="layout-twothirds-center">
              <h1>Login!!</h1>
            </div>
          </div>
          
        </section>
        <footer className="quiet" data-track-group="Footer">
          <p> © Copyright 2017, Trello, Inc. All rights reserved. </p>
        </footer>
      </div>
    )
  };
}

export default LoginPanel;