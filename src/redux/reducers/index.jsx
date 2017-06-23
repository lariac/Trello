import * as actionsList from '../actions';


const initialState = {
  boards: {},
  lists: {},
  cards: {},
  member: "",
  errorsAccount: {},
  isLoading: false,
  signUpSuccess: false,
  invalidAccount: false,
  loginSuccess: false,
  loginError: {},
  token: {},
  isAuthenticated: false,
  currentUser: {},
  errorMessage: "",
  openBoard: [],
  boardList: []
}


export default function Trello(state = initialState, action) {
  switch (action.type) {
    case actionsList.SIGNUPSUBMIT:
      return Object.assign({}, state, {
        isLoading: true
        //  isFetching: true
      });
    case actionsList.SIGNUPSUBMIT_SUCCESS:
      console.log("entre a suuuucesss");
      return Object.assign({}, state, {
        isLoading: false,
        signUpSuccess: true,
        errorsAccount: action.errorsAccount,
        currentUser: action.user
        //   bretes: action.bretes,
        //  isFetching: false
      });
    case actionsList.SIGNUPSUBMIT_FAILURE:
      return Object.assign({}, state, {
        // isFetching: false,
        errorsAccount: action.errorsAccount,
        isLoading: false,
        signUpSuccess: false
      });

    case actionsList.SET_ERRORS_ACCOUNT:
      return Object.assign({}, state, {
        errorsAccount: action.errorsAccount,
        isLoading: false,
        signUpSuccess: false
      });

    case actionsList.VERIFY_EMAIL_UNIQUENESS:

      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.GET_MEMBER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        //  user: action.user,
        errorsAccount: action.errorsAccount,
        invalidAccount: action.invalidAccount
      });

    case actionsList.GET_MEMBER_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        invalidAccount: action.invalidAccount
      });

    case actionsList.LOGINSUBMIT:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actionsList.SET_CURRENT_USER:
      console.log("entre a suuuucesss");
      let authenticateUser = false;
      console.log("NO TENGO QUE AUTENTICAR USUARIO!!!!!" + action.user);
      if (action.user == undefined) {
        authenticateUser = false;
      }
      else {
        authenticateUser = true;
      }
      return Object.assign({}, state, {
        isLoading: false,
        loginError: action.loginError,
        loginSuccess: true,
        currentUser: action.user,
        errorsAccount: action.errorsAccount,
        isAuthenticated: authenticateUser
      });
    case actionsList.LOGINSUBMIT_FAILURE:
      return Object.assign({}, state, {
        loginError: action.loginError,
        isLoading: false,
        loginSuccess: false
      });

    case actionsList.REMOVE_CURRENT_USER:
      return Object.assign({}, state, {
        isAuthenticated: action.authenticateUser,
        currentUser: action.user,
        loginError: action.loginError,
        errorsAccount: action.errorsAccount
      });

    case actionsList.GET_USER_BOARDS:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.GET_USER_BOARDS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        boards: action.boards
      });

    case actionsList.GET_USER_BOARDS_FAILURE:
      console.log("ESTOY EN FALLO!");
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });

    case actionsList.CREATE_BOARD:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.CREATE_BOARD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });

    case actionsList.CREATE_BOARD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });

       case actionsList.DELETE_BOARD:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.DELETE_BOARD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });

    case actionsList.DELETE_BOARD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });


    case actionsList.GET_BOARD:
    console.log("ESTOY EN GET BOARD!!");
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.GET_BOARD_SUCCESS:
    console.log("HICE LA ACCION DE GET BOARD SUCCESS!!");
      return Object.assign({}, state, {
        isLoading: false,
        openBoard: action.board
      });

    case actionsList.GET_BOARD_FAILURE:
      console.log("ESTOY EN FALLO!");
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });


    case actionsList.GET_BOARD_LIST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.GET_BOARD_LIST_SUCCESS:
    console.log("YA METI LISTAS EN LA VARIABLEEEEEEE BOAAARDLIST!!!");
      return Object.assign({}, state, {
        isLoading: false,
        boardList: action.boardList
      });

    case actionsList.GET_BOARD_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });


    case actionsList.CREATE_LIST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.CREATE_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      });

    case actionsList.CREATE_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });

       case actionsList.DELETE_LIST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.DELETE_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      });

    case actionsList.DELETE_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });

      case actionsList.CREATE_CARD:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionsList.CREATE_CARD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      });

    case actionsList.CREATE_CARD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage
      });
      
      
      




    default:
      return state;
  }
}