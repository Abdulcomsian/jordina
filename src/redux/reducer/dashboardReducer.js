import * as Actions from "../actionTypes";

const initialState = {
  updateData: false,
  userData: [],
  orderData: [],
  unPaidOrder: [],
  refreshData:false
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
    case Actions.GET_CLIENT_ORDER_SUCCESS:
      return {
        ...state,
        orderData: action.payload,
      };
    case Actions.GET_CLIENT_UN_PAID_ORDER_SUCCESS:
      return {
        ...state,
        unPaidOrder: action.payload,
      };
    case Actions.REMOVE_UNPIAD_DATA_SUCCESS:
      return {
        ...state,
        refreshData: true
      };
    default:
      return state;
  }
};
