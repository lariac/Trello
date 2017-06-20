import * as actionsList from '../actions';


const initialState = {
  boards: {},
  lists: {},
  cards: {},
  member: "",
  errorsAccount: {},
  isLoading: false,
  signUpSuccess: false,
  user: {},
  invalidAccount: false,
  loginSuccess: false,
  loginError: {}
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
        errorsAccount: action.errorsAccount
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
        user: action.user,
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
        //  isFetching: true
      });
    case actionsList.LOGINSUBMIT_SUCCESS:
      console.log("entre a suuuucesss");
      return Object.assign({}, state, {
        isLoading: false,
        errorsAccount: action.errorsAccount,
        loginSuccess: true
        //   bretes: action.bretes,
        //  isFetching: false
      });
    case actionsList.LOGINSUBMIT_FAILURE:
      return Object.assign({}, state, {
        // isFetching: false,
        errorsAccount: action.errorsAccount,
        isLoading: false,
        loginSuccess: false
      });


    default:
      return state;
  }
}