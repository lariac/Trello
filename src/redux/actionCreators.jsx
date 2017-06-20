import axios from 'axios';

import * as actionType from './actions';

import { BrowserRouter } from 'react-router-dom';

import { Redirect } from 'react-router'

export function signUpSubmit(userAccountInformation) {
  // const memberData = {name: userAccountInformation.userName, email: userAccountInformation.userEmail, password: userAccountInformation.userPassword}
  return function (dispatch) {
    dispatch({
      type: actionType.SIGNUPSUBMIT
    });
    console.log("el member es: " + userAccountInformation.name);
    axios
      .post('http://localhost:3000/api/member', userAccountInformation)
      .then(result => {
        console.log("insercion exitosaaa");

        dispatch({
          type: actionType.SIGNUPSUBMIT_SUCCESS,
          errorsAccount: {}
        });
        return Promise.resolve();
      })
      .catch(error => {
        console.log("ESTOY EN ERROR!!");
        dispatch({
          type: actionType.SIGNUPSUBMIT_FAILURE,
          // error 
          errorsAccount: error.response.data
        });
        return Promise.resolve();
      })
  }
}

export function setErrorsAccount(validationResult) {
  return function (dispatch) {
    dispatch({
      type: actionType.SET_ERRORS_ACCOUNT,
      errorsAccount: validationResult
    });
  }
}

export function verifyEmailUniqueness(inputValue) {
  console.log("verificar emaaaail!!");
  return function (dispatch) {
    dispatch({
      type: actionType.VERIFY_EMAIL_UNIQUENESS,
    });
    axios
      .get('http://localhost:3000/api/member/' + inputValue)
      .then(result => {
        let errors = {};
        let invalidInformation = false;
        console.log("result es: " + result);
        if (result.data.length > 0) {
          errors.email = "*Email already in use by another account";
          errors.valid = false;
          invalidInformation = true;
        }
        else{
          errors.valid = true;
        }
        dispatch({
          type: actionType.GET_MEMBER_SUCCESS,
          user: result.data,
          errorsAccount: errors,
          invalidAccount:  invalidInformation
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.GET_MEMBER_FAILURE,
          errorsAccount: error.response.data,
          invalidAccount: true
        });
      })
  }
}

export function loginSubmit(userAccountInformation){
  console.log("ESTOY EN LOGIN SUBMIT!");
  return function (dispatch) {
    dispatch({
      type: actionType.LOGINSUBMIT,
    });
    axios
      .post('http://localhost:3000/api/auth/', userAccountInformation)
      .then(result => {
        console.log(result + "esto tiene result " + result.data);
        dispatch({
          type: actionType.LOGINSUBMIT_SUCCESS,
          loginError: result.data,
          errorsAccount: {}
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.LOGINSUBMIT_FAILURE,
          errorsAccount: error.response.data
        });
      })
  }
}

