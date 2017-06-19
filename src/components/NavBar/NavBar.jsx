import React from 'react';
import { Link } from 'react-router-dom';
import NavBarStyle from './_NavBar.scss'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-color">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/home" className="navbar-brand" > <img className="navbar-trello-logo" src={require("../../img/trello-home-logo.svg")}/>  </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login"><button className="btn navbar-login-button">Log In</button></Link></li>
              <li><Link to="signup"><button className="btn navbar-signup-button">Sign Up</button></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default NavBar;