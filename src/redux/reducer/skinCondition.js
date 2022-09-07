import * as Actions from "../actionTypes";

const initialState = {
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SKIN_TEST_SUCCESS:
      return {
        ...state,
        message: action.payload.message
      };
    case Actions.SKIN_TEST_FAIL:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
