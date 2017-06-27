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

    LoginPanelContainer.propTypes = {
      isLoading: bool,
      errors: object,
      loginSuccess: bool,
      setErrors: func,
      validAccount: bool,

      loginSubmit: func.isRequired,
      loginError: object,
      isAuthenticated: bool
    }
  }

  //Method to handle the value of the input's name/email and password
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated != undefined && this.props.isAuthenticated === true) {
      this.context.router.history.push('/board')
    }
  }

  componentWillMount() {
    if (this.props.isAuthenticated != undefined && this.props.isAuthenticated === true) {
      this.context.router.history.push('/board')
    }
  }


  render() {
    const { loginSubmit, errors, isLoading, setErrors, signUpSuccess, verifyEmailUniqueness, invalidAccount, loginError, loginSuccess } = this.props;
    return (
      <LoginPanel
        onChange={this.onChange}
        loginSubmit={loginSubmit}
        errors={errors}
        isLoading={isLoading}
        setErrors={setErrors}
        loginError={loginError}
        loginSuccess={loginSuccess}
        {... this.state} />
    );
  }
};

const mapStateToProps = state => {
  return {
    errors: state.errorsAccount,
    isLoading: state.isLoading,
    loginSuccess: state.loginSuccess,
    loginError: state.loginError,
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (userInformation) => dispatch(loginSubmit(userInformation)),
    setErrors: (validationResult) => dispatch(setErrorsAccount(validationResult)),
  };
};


LoginPanelContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPanelContainer);
