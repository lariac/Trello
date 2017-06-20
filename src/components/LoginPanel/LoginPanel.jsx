import React from 'react';
import loginStyle from './_Login.scss'
import validateInputData from '../../../api/shared/validations/loginValidation'

class LoginPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validLoginInformation = this.validLoginInformation.bind(this)
    /* SignUpPanel.defaultProps = {
       listTitle: "Design Thinking Session"
     }; */
  }
  handleOnChange(e) {
    this.props.onChange(e);
  }

   validLoginInformation() {

    const userAccountInformation = { nameEmail: this.props.userNameEmail, password: this.props.userPassword }
    console.log("esto tiene el user account information " + userAccountInformation.nameEmail );
    const validationResult = validateInputData(userAccountInformation);

    if (validationResult.valid === false) {
      this.props.setErrors(validationResult);
    }

    return validationResult.valid;
  }

  handleOnSubmit(e) {
    e.preventDefault();
     if (this.validLoginInformation() === true) {
      const userInformation = { nameEmail: this.props.userNameEmail, password: this.props.userPassword }

      this.props.loginSubmit(userInformation);
    }
  }

 

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 noPadding">
            <div className="loginWrapper">
              <div className="loginContent loginContent__trelloLogo">
                <img src={require('../../img/Trello-logo.svg')} />

 

                <form className="userInformation" onSubmit={this.handleOnSubmit} >
                  <input
                    className="userInformation__userName form-control"
                    placeholder="User name or email"
                    onChange={this.handleOnChange}
                    name="userNameEmail"
                    value={this.props.userNameEmail}
                  />
                  {this.props.errors.nameEmail && <span className="help-block"> {this.props.errors.nameEmail} </span>}
                  <input
                    type="password"
                    className="userInformation__password form-control"
                    placeholder="Password"
                    name= "userPassword"
                    onChange={this.handleOnChange}
                    value={this.props.userPassword}                 
                  />
                    {this.props.errors.password && <span className="help-block"> {this.props.errors.password} </span>}
                  <button className="btn btn-primary userInformation__logIn fontLogin" disabled={this.props.isLoading}>Log In</button>
                </form>
                <div>
                  <svg className="left-division-line">
                    <line x1="0" y1="5.234375vh" x2="100%" y2="5.234375vh" className="divisionLine" />
                  </svg>
                  <label className="font">OR</label>
                  <svg className="right-division-line">
                    <line x1="0" y1="5.234375vh" x2="100%" y2="5.234375vh" className="divisionLine" />
                  </svg>
                </div>
                <div className="newAccount">
                  <a href="#" className="">Create a Trello Account</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 noPadding homeImage">
          </div>
        </div>
      </div>
    )
  };
}

LoginPanel.propTypes = {
  loginSubmit: React.PropTypes.func.isRequired
}

export default LoginPanel;