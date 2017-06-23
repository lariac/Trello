import axios from 'axios';

import * as actionType from './actions';

import { BrowserRouter } from 'react-router-dom';

import { Redirect } from 'react-router'

import setAuthorizationToken from '../utils/setAuthorizationToken';

import jwt from 'jsonwebtoken';

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

export function verifyUsernameEmailUniqueness(inputValue, inputName) {
  console.log("verificar emaaaail y usernameeeee!!" + inputValue);
  return function (dispatch) {
    dispatch({
      type: actionType.VERIFY_EMAIL_UNIQUENESS,
    });
    axios
      .get('http://localhost:3000/api/member/' + inputValue)
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
          console.log("entre a elseeee!");
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
  console.log("ESTOY EN ACTION CREATOR DE LOG OUT");
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
  console.log("ESTOY EN LOGIN SUBMIT!");
  return function (dispatch) {
    dispatch({
      type: actionType.LOGINSUBMIT,
    });
    axios
      .post('http://localhost:3000/api/auth/', userAccountInformation)
      .then(result => {
        const token = result.data.token;
        setAuthorizationToken(token);
        localStorage.setItem('jwtToken', token);
        setCurrentUser(jwt.decode(token));
        console.log(jwt.decode(token));
        console.log(result + "esto tiene result de toooookeeeeeeeen " + result.data);
        dispatch({
          type: actionType.SET_CURRENT_USER,
          user: jwt.decode(token),
          loginError: {},
          errorsAccount: {}
        });
      })
      .catch(error => {
        console.log("error es: " + error.response.data[0]);
        dispatch({
          type: actionType.LOGINSUBMIT_FAILURE,
          loginError: error.response.data
          //errorsAccount: error.response.data
        });
      })
  }
}

export function getUserBoards(userId){
  console.log("ENTRE A GET USER BOARDS :D" + userId);
  return function (dispatch) {
    dispatch({
      type: actionType.GET_USER_BOARDS,
    });
    axios
      .get('http://localhost:3000/api/board/user/' + userId)
      .then(result => {
        console.log("estoy en el then de exito! user boards ");
        console.log(result.data);
        dispatch({
          type: actionType.GET_USER_BOARDS_SUCCESS,
          boards: result.data
        });
      })
      .catch(error => {
         console.log("estoy en error de traer boards!!" + error);
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
      .post('http://localhost:3000/api/board/', boardInformation)
      .then(result => {
        console.log(result);
        
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
  console.log("el board es: " + boardId);
return function (dispatch) {
    dispatch({
      type: actionType.DELETE_BOARD,
    });
    axios
      .delete('http://localhost:3000/api/board/' + boardId)
      .then(result => {
        console.log(result);
        
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
  console.log("ESTOY OBTENIENDO LAS LISTAS DEL BOARD!!");
  console.log("boardId es: " + boardId);
  return function (dispatch) {
    dispatch({
      type: actionType.GET_BOARD_LIST,
    });
    axios
      .get('http://localhost:3000/api/list/' + boardId)
      .then(result => {
        console.log("estoy en el then de exito de listaaassss!");
        console.log(result.data);
        dispatch({
          type: actionType.GET_BOARD_LIST_SUCCESS,
          boardList: result.data
        });
      })
      .catch(error => {
         console.log("estoy en error de traer listaaaaasss!!" + error);
        dispatch({
          type: actionType.GET_BOARD_LIST_FAILURE,
          errorMessage: error
        });
      })
  }
}


export function getBoardInformation(boardId){
  console.log("estoy trayendo board info con " + boardId);
  return function (dispatch) {
    dispatch({
      type: actionType.GET_BOARD,
    });
    axios
      .get('http://localhost:3000/api/board/' + boardId)
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
      .post('http://localhost:3000/api/list/', listInformation)
      .then(result => {
        console.log(result);
        
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
      .delete('http://localhost:3000/api/list/'+ idList)
      .then(result => {
        console.log(result);
        
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
      .post('http://localhost:3000/api/card/', cardInformation)
      .then(result => {
        console.log(result);
        
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

