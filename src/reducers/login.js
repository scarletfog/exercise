import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from '../actions/login';


const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

export default function Loginreducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: true,
        isLoginSuccess: false,
        loginError: null,
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginPending: false,
        isLoginSuccess: true,
        loginData: {
          userLogin: action.userLogin,
          userPassword: action.userPassword,
        }
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        isLoginPending: false,
        loginError: action.error,
      };

    default:
      return state;
  }
}
