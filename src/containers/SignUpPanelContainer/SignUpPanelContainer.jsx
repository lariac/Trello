import React from 'react';
import SignUpPanel from '../../components/SignUpPanel/SignUpPanel'
import { connect } from 'react-redux'
import { signUpSubmit, setErrorsAccount, verifyUsernameEmailUniqueness } from '../../redux/actionCreators'
import { object, func, bool } from 'prop-types';
import { Route, Redirect } from 'react-router'


class SignUpPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: ""
    };
    this.onChange = this.onChange.bind(this);
    SignUpPanelContainer.propTypes = {
      isLoading: bool,
      errors: object,
      signUpSuccess: bool,
      setErrors: func,
      validAccount: bool,
      isAuthenticated: bool
    }
  }

 //Method to handle the input's value for the name, email and password
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

    const { signUpSubmit, errors, isLoading, setErrors, signUpSuccess, verifyUsernameEmailUniqueness, invalidAccount } = this.props;

    return (
      <SignUpPanel
        onChange={this.onChange}
        signUpSubmit={signUpSubmit}
        errors={errors}
        setErrors={setErrors}
        isLoading={isLoading}
        verifyUsernameEmailUniqueness = {verifyUsernameEmailUniqueness}
        invalidAccount = {invalidAccount}
        {... this.state} />
    );
  }
};

const mapStateToProps = state => {
  return {
    errors: state.errorsAccount,
    isLoading: state.isLoading,
    signUpSuccess: state.signUpSuccess,
    invalidAccount: state.invalidAccount,
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpSubmit: (userAccountInformation) => dispatch(signUpSubmit(userAccountInformation)),
    setErrors: (validationResult) => dispatch(setErrorsAccount(validationResult)),
    verifyUsernameEmailUniqueness: (inputValue, inputName) => dispatch(verifyUsernameEmailUniqueness(inputValue, inputName))
  };
};


SignUpPanelContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPanelContainer);
