import React from 'react';
import LoginStyle from '../LoginPanel/_Login.scss'
import validateInputData from '../../../api/shared/validations/signUpValidation'

class SignUpPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.accountInformationValid = this.accountInformationValid.bind(this);
    this.handleUsernameEmailUniqueness = this.handleUsernameEmailUniqueness.bind(this);

    /* SignUpPanel.defaultProps = {
       listTitle: "Design Thinking Session"
     }; */
  }
  handleOnChange(e) {
    this.props.onChange(e);
  }

  accountInformationValid() {
    const userAccountInformation = { name: this.props.userName, email: this.props.userEmail, password: this.props.userPassword }
    const validationResult = validateInputData(userAccountInformation);

    if (validationResult.valid === false) {
      this.props.setErrors(validationResult);
    }

    return validationResult.valid;

  }

  handleUsernameEmailUniqueness(e) {
    console.log("ESTOY EN BLUR!");
    const inputValue = e.target.value;
    const inputName = e.target.name;
    if (inputValue != '') {
      console.log("input value es: " + inputValue);
      this.props.verifyUsernameEmailUniqueness(inputValue, inputName);
    }
  }

  handleOnSubmit(e) {
    e.preventDefault();
    if (this.accountInformationValid() === true) {
      const userAccountInformation = { name: this.props.userName, email: this.props.userEmail, password: this.props.userPassword }
      this.props.signUpSubmit(userAccountInformation);
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
                <form className="userInformation" onSubmit={this.handleOnSubmit}>
                  <input
                    className="userInformation__userName form-control"
                    name="userName"
                    onChange={this.handleOnChange}
                    onBlur={this.handleUsernameEmailUniqueness}
                    placeholder="Name"
                    value={this.props.userName} />
                  {this.props.errors.name && <span className="help-block"> {this.props.errors.name} </span>}
                  <input
                    className="userInformation__email form-control"
                    name="userEmail"
                    onBlur={this.handleUsernameEmailUniqueness}
                    placeholder="Email"
                    onChange={this.handleOnChange}
                    value={this.props.userEmail} />
                  {this.props.errors.email && <span className="help-block"> {this.props.errors.email} </span>}
                  <input
                    type="password"
                    className="userInformation__password form-control"
                    name="userPassword"
                    placeholder="Password"
                    onChange={this.handleOnChange}
                    value={this.props.userPassword} />
                  {this.props.errors.password && <span className="help-block"> {this.props.errors.password} </span>}
                  <button className="btn btn-primary userInformation__logIn fontLogin" disabled={this.props.isLoading || this.props.invalidAccount}>Sign Up</button>
                </form>
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

SignUpPanel.propTypes = {
  signUpSubmit: React.PropTypes.func.isRequired,
  verifyUsernameEmailUniqueness: React.PropTypes.func.isRequired
}

export default SignUpPanel;
