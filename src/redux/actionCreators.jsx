import axios from 'axios';

import * as actionType from './actions';

import { BrowserRouter } from 'react-router-dom';

import { Redirect } from 'react-router'

import setAuthorizationToken from '../utils/setAuthorizationToken';

import jwt from 'jsonwebtoken';

const API_URL = 'http://localhost:3000/api/';

export function signUpSubmit(userAccountInformation) {
  return function (dispatch) {
    dispatch({
      type: actionType.SIGNUPSUBMIT
    });
    axios
      .post(API_URL+'member', userAccountInformation)
      .then(result => {
        const loginInformation = {name: userAccountInformation.name, password: userAccountInformation.password }
        dispatch(loginSubmit(loginInformation));
        dispatch({
          type: actionType.SIGNUPSUBMIT_SUCCESS,
          errorsAccount: {},
          user: result.data
        });
        return Promise.resolve();
      })
      .catch(error => {
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

export function verifyUsernameEmailUniqueness(inputValue, inputName) {
  return function (dispatch) {
    dispatch({
      type: actionType.VERIFY_EMAIL_UNIQUENESS,
    });
    axios
      .get(API_URL+'member' + inputValue)
      .then(result => {
        let errors = {};
        let invalidInformation = false;

        if (result.data[0].length != undefined || result.data[1].length != undefined) {
          if (inputName === "userName") {
            errors.name = "*User name already in use by another account";
          }
          else {
            errors.email = "*Email already in use by another account";
          }
          errors.valid = false;
          invalidInformation = true;
        }
        else {
          errors.name = "";
          errors.email = "";
          errors.valid = true;
        }
        dispatch({
          type: actionType.GET_MEMBER_SUCCESS,
          user: result.data,
          errorsAccount: errors,
          invalidAccount: invalidInformation
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

export function setCurrentUser(user) {
  return function (dispatch) {
    dispatch({
      type: actionType.SET_CURRENT_USER,
      user: user,
      loginError: {},
      errorsAccount: {},
    });
  }
}

export function logOut() {
  return function (dispatch) {
    localStorage.removeItem('jwtToken');
     setAuthorizationToken(false)
    dispatch(
       {
        type: actionType.REMOVE_CURRENT_USER,
        authenticateUser: false,
        user: {},
        loginError: {},
        errorsAccount: {}
      });
  }
}

export function loginSubmit(userAccountInformation) {
  return function (dispatch) {
    dispatch({
      type: actionType.LOGINSUBMIT,
    });
    axios
      .post(API_URL+'auth/', userAccountInformation)
      .then(result => {
        const token = result.data.token;
        setAuthorizationToken(token);
        localStorage.setItem('jwtToken', token);
        setCurrentUser(jwt.decode(token));
        dispatch({
          type: actionType.SET_CURRENT_USER,
          user: jwt.decode(token),
          loginError: {},
          errorsAccount: {}
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.LOGINSUBMIT_FAILURE,
          loginError: error.response.data
          //errorsAccount: error.response.data
        });
      })
  }
}

export function getUserBoards(userId){
  return function (dispatch) {
    dispatch({
      type: actionType.GET_USER_BOARDS,
    });
    axios
      .get(API_URL+'board/user/' + userId)
      .then(result => {
        dispatch({
          type: actionType.GET_USER_BOARDS_SUCCESS,
          boards: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.GET_USER_BOARDS_FAILURE,
          errorMessage: error
        });
      })
  }
}

export function addBoard(boardInformation){
  return function (dispatch) {
    dispatch({
      type: actionType.CREATE_BOARD,
    });
    axios
      .post(API_URL+'board/', boardInformation)
      .then(result => {
        
        dispatch(getUserBoards(boardInformation.idMembers[0]));

        dispatch({
          type: actionType.CREATE_BOARD_SUCCESS,
          createdBoard: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.CREATE_BOARD_FAILURE,
          errorMessage: error
        });
      })
  }
}

export function deleteBoard(boardId, idAuthenticateMember ){
return function (dispatch) {
    dispatch({
      type: actionType.DELETE_BOARD,
    });
    axios
      .delete(API_URL+'board/' + boardId)
      .then(result => {
        
        dispatch(getUserBoards(idAuthenticateMember));

        dispatch({
          type: actionType.DELETE_BOARD_SUCCESS,
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.DELETE_BOARD_FAILURE,
          errorMessage: error
        });
      })
  }
}

export function getBoardList(boardId){
  return function (dispatch) {
    dispatch({
      type: actionType.GET_BOARD_LIST,
    });
    axios
      .get(API_URL+'list/' + boardId)
      .then(result => {
        dispatch({
          type: actionType.GET_BOARD_LIST_SUCCESS,
          boardList: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.GET_BOARD_LIST_FAILURE,
          errorMessage: error
        });
      })
  }
}


export function getBoardInformation(boardId){
  return function (dispatch) {
    dispatch({
      type: actionType.GET_BOARD,
    });
    axios
      .get(API_URL+'board/' + boardId)
      .then(result => {
        dispatch(getBoardList(boardId));
        dispatch({
          type: actionType.GET_BOARD_SUCCESS,
          board: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.GET_BOARD_FAILURE,
          errorMessage: error
        });
      })
  }
}

export function addList(listInformation){
  return function (dispatch) {
    dispatch({
      type: actionType.CREATE_LIST,
    });
    axios
      .post(API_URL+'list/', listInformation)
      .then(result => {
        
        dispatch(getBoardList(listInformation.idBoard));

        dispatch({
          type: actionType.CREATE_LIST_SUCCESS,
         // createdBoard: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.CREATE_LIST_FAILURE,
          errorMessage: error
        });
      })
  }
}

export function deleteList(idList, idBoard){
  return function (dispatch) {
    dispatch({
      type: actionType.DELETE_LIST,
    });
    axios
      .delete(API_URL+'list/'+ idList)
      .then(result => {
        
        dispatch(getBoardList(idBoard));

        dispatch({
          type: actionType.DELETE_LIST_SUCCESS,
         // createdBoard: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.DELETE_LIST_FAILURE,
          errorMessage: error
        });
      })
  }
}


export function addCard(cardInformation){
  return function (dispatch) {
    dispatch({
      type: actionType.CREATE_CARD,
    });
    axios
      .post(API_URL+'card/', cardInformation)
      .then(result => {
        
        dispatch(getBoardList(cardInformation.idBoard));

        dispatch({
          type: actionType.CREATE_CARD_SUCCESS,
         // createdBoard: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.CREATE_CARD_FAILURE,
          errorMessage: error
        });
      })
  }
}

export function deleteCard(idCard, idBoard){
  return function (dispatch) {
    dispatch({
      type: actionType.DELETE_CARD,
    });
    axios
      .delete(API_URL+'card/'+ idCard)
      .then(result => {

        dispatch(getBoardList(idBoard));

        dispatch({
          type: actionType.DELETE_CARD_SUCCESS,
         // createdBoard: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.DELETE_CARD_FAILURE,
          errorMessage: error
        });
      })
  }
}

