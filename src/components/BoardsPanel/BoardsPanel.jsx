import React from 'react';
import BoardNavbar from '../BoardNavbar/BoardNavbar'
import BoardsPanelStyle from './_Home.scss'

class BoardsPanel extends React.Component {
  render() {
    return (
      <div>
        <header>
          <BoardNavbar/>
        </header>
        <main className="boards-panel-login">
          <div className="home-login-wrappper">
            <div className="text-center">
              <h1>Welcome back to Trello!!</h1>
            </div>
          </div>
        </main>
      </div>
    )
  };
}

export default BoardsPanel;