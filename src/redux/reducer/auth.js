import * as Actions from "../actionTypes";

const initialState = {
  errorEmail: null,
  errorFirstName: null,
  errorLastName: null,
  error: null,
  token: null,
  authenticated: localStorage.getItem(
    localStorage.getItem("authenticated") || false
  ),
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        authenticated: localStorage.setItem("authenticated", true),
      };
    case Actions.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.message,
        authenticated: localStorage.setItem("authenticated", false),
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        authenticated: localStorage.setItem("authenticated", true),
      };
    case Actions.REGISTER_FAIL:
      return {
        ...state,
        errorEmail: action.payload.message.email,
        errorFirstName: action.payload.message.first_name,
        errorLastName: action.payload.message.last_name,
        authenticated: localStorage.setItem("authenticated", true),
      };
    default:
      return state;
  }
};
