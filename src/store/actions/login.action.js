import axios from "axios";

export const loginUser = (userObj) => {
  // const appUrl = "https://myfuelcredit-api.herokuapp.com/api/login"
  return (dispatch) => {
    axios
      .post("https://myfuelcredit-api.herokuapp.com/api/login", userObj)
      .then((response) => {
        localStorage.setItem("token", response.data.success.token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.success.token,
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_ERROR",
          error,
        });
        console.log(error);
      });
  };
};

export const signUpUser = (userObj) => {
  console.log(userObj)
  return (dispatch) => {
    axios
      .post("https://myfuelcredit-api.herokuapp.com/api/register", userObj)
      .then((response) => {
        localStorage.setItem("tokenUp", response.data.success.token);
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: response.data.success.token,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SIGNUP_ERROR",
          error,
        });
        console.log(error);
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT_SUCCESS",
    });
  };
};
