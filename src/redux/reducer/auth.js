import * as Actions from "../actionTypes";

const initialState = {
  isLogin: null,
  token: null,
  authenticated: localStorage.getItem(
    localStorage.getItem("authenticated") || false
  ),
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        authenticated: localStorage.setItem("authenticated", true),
      };
    default:
      return state;
  }
};
