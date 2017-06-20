import React from 'react';
import LoginPanel from '../../components/LoginPanel/LoginPanel'
import { connect } from 'react-redux'
import { loginSubmit, setErrorsAccount } from '../../redux/actionCreators'
import { object, func, bool } from 'prop-types';
import { Route, Redirect } from 'react-router'


class LoginPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameEmail: "",
      userPassword: ""
    };
    this.onChange = this.onChange.bind(this);

    //  this.setErrors = this.setErrors.bind(this);
    LoginPanelContainer.propTypes = {
      isLoading: bool,
      errors: object,
      loginSuccess: bool,
      setErrors: func,
      validAccount: bool,

      loginSubmit: func.isRequired,
      loginError: object
    }
  }

  onChange(e) {
    console.log("esta cambiando este: " + e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidUpdate() {
    console.log('COMPONENT UPDATE!!' + this.props.signUpSuccess);

    if (this.props.LoginSuccess===true) {
      this.context.router.history.push('/board')
    }
  }

  
  render() {
    const { loginSubmit, errors, isLoading, setErrors, signUpSuccess, verifyEmailUniqueness, invalidAccount, loginError } = this.props;
    return (
      <LoginPanel
        onChange={this.onChange}
        loginSubmit={loginSubmit}
        errors={errors}
        isLoading={isLoading}
        setErrors={setErrors}
        loginError={loginError}
        //  verifyEmailUniqueness={verifyEmailUniqueness}
        //    invalidAccount={invalidAccount}
        {... this.state} />
    );
  }
};

const mapStateToProps = state => {
  return {
    errors: state.errorsAccount,
    isLoading: state.isLoading,
    loginSuccess: state.loginSuccess,
    loginError: state.loginError
    //   invalidAccount: state.invalidAccount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (userInformation) => dispatch(loginSubmit(userInformation)),
    setErrors: (validationResult) => dispatch(setErrorsAccount(validationResult)),
    //   verifyEmailUniqueness: (inputValue) => dispatch(verifyEmailUniqueness(inputValue))
  };
};


LoginPanelContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPanelContainer);
