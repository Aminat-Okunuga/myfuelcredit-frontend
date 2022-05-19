import { ActionTypes } from "../constants/actionTypes";
const INITIAL_STATE = {
  authError: null,
};
export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ERROR:
      return { ...state, authError: "Incorrect email or Password" };
    case ActionTypes.LOGIN_SUCCESS:
      return { state, authError: null, token: payload };
    case ActionTypes.SIGNUP_ERROR:
      return { ...state, authError: "Incorrect data" };
    case ActionTypes.SIGNUP_SUCCESS:
      return { state, authError: null, token: payload };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return { state, authError: null };

    default:
      return state;
  }
};
