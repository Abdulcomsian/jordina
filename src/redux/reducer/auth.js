import * as Actions from "../actionTypes";

const initialState = {
  errorEmail: null,
  errorFirstName: null,
  errorLastName: null,
  error: null,
  token: null,
  authenticated: false,
  statusLogout: null,
  key:"Hamza",
  stripeKey: "pk_test_51LhsdnGCTNDeFrTZI9H9kLQWpzYfNXNFww1rUvYc4Yzh9cZaO44KQqterVrEuI0ne1w9dnGDTqsEO11yi7GCHvhn00rGEnAYLF",
  user_id: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        authenticated: true,
        error: null,
        statusLogout: null,
        user_id: action.payload.data.user_id
      };
    case Actions.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.message,
        authenticated: false,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        authenticated: true,
        error: null,
      };
    case Actions.REGISTER_FAIL:
      return {
        ...state,
        errorEmail: action.payload.message.email,
        errorFirstName: action.payload.message.first_name,
        errorLastName: action.payload.message.last_name,
        authenticated: false,
      };
    case Actions.LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        token: null,
        error: null,
        statusLogout: action.payload.status,
      };
    default:
      return state;
  }
};
