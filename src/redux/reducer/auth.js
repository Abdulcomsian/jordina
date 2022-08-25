import * as Actions from "../actionTypes";

const initialState = {
  isLogin: null,
  token: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
      };
    default:
      return state;
  }
};
