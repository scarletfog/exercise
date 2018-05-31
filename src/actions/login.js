import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  API_URL,
  CORS_API_URL,
} from 'constants/action-types';

export function setLoginPending() {
  return {
    type: SET_LOGIN_PENDING,
  };
}

export function setLoginSuccess(userLogin, userPassword) {
  return {
    type: SET_LOGIN_SUCCESS,
    userLogin,
    userPassword,
  };
}

export function setLoginError(error = {}) {
  return {
    type: SET_LOGIN_ERROR,
    error,
  };
}

export function loginAction(userLogin, userPassword) {
  return (dispatch) => {
    dispatch(setLoginPending());
    return fetch(`${CORS_API_URL + API_URL}/categories`, {
      headers: {
        Authorization: `Basic ${btoa(`${userLogin}:${userPassword}`)}`,
      }

    })
      .then(() => {
        dispatch(setLoginSuccess(
          userLogin,
          userPassword,
        ));
        return true;
      })
      .catch(err => {
        dispatch(setLoginError(err));
        return false;
      });
  };
}
