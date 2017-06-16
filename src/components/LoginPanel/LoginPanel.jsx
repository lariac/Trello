import React from 'react';
import loginStyle from './_Login.scss'

class LoginPanel extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 noPadding">
            <div className="loginWrapper loginWrapper__trelloLogo">
              <img src={require('../../img/Trello-logo.svg')} />
     
              <form className="userInformation">
                <input className="userInformation__userName form-control" placeholder="User name or email"/>
                <input type="password" className="userInformation__password form-control" placeholder="Password"/>
                <button className="btn btn-primary userInformation__logIn">Log In</button>
              </form>
              <span>
                <svg className="division1">
                  <line x1="0" y1="5.234375vh" x2="12.65612vw" y2="5.234375vh" className="divisionLine" />
                </svg>
                <label className="font">OR</label>
                <svg className="division2">
                  <line x1="0" y1="5.234375vh" x2="12.656125vw" y2="5.234375vh" className="divisionLine" />
                </svg>
              </span>
              <div className="newAccount">
              <a href="#" className="">Create a Trello Account</a>
              </div>
            </div>
          </div>
          <div className="col-md-7 noPadding">
                  <img src={require('../../img/Home.png')} className="homeImage" />
          </div>
        </div>
      </div>
    )
  };
}

export default LoginPanel;