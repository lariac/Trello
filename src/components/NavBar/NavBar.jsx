import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/home" className="navbar-brand" >Trello</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login">Login</Link></li>
              <li><Link to="signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default NavBar;