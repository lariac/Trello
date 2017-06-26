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
    this.setErrors = this.setErrors.bind(this);
    SignUpPanelContainer.propTypes = {
      isLoading: bool,
      errors: object,
      signUpSuccess: bool,
      setErrors: func,
      validAccount: bool
    }
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  setErrors(data) {
  //  console.log("estos son los errores" + data);
  }
  componentDidUpdate() {

    if (this.props.signUpSuccess != undefined && this.props.signUpSuccess===true) {
      this.context.router.history.push('/board')
    }
  }
    componentWillMount() {

    if (this.props.signUpSuccess != undefined && this.props.signUpSuccess===true) {
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
        isLoading={isLoading}
        setErrors={setErrors}
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
    invalidAccount: state.invalidAccount
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
