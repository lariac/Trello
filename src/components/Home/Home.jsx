import React from 'react';
import NavBar from '../NavBar/NavBar'
import HomeStyle from './_Home.scss'

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <main className="home-login">
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

export default Home;