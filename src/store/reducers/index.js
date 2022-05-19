import { combineReducers } from "redux";
import { userReducer } from "./login.reducer";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  userReducer: userReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_SUCCESS") {
    storage.removeItem("persist:root");
    localStorage.clear();
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
