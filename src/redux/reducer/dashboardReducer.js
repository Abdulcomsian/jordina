import * as Actions from "../actionTypes";

const initialState = {
  updateData: false,
  userData: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_CLIENT_PROFILE_SUCCESS:
      return {
        ...state,
        updateData: true,
      };
    case Actions.GET_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
