import * as Actions from "../actionTypes";

const initialState = {
  message: null,
  diseasesArray: [],
  appointmentId: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SKIN_TEST_SUCCESS:
      return {
        ...state,
        diseasesArray: action.payload.message,
        appointmentId: action.payload.data.appointment.id,
      };
    case Actions.SKIN_TEST_FAIL:
      return {
        ...state,
        message: action.payload.message,
      };
    case Actions.SKIN_DIEASES_SUCCESS:
      return {
        ...state,
        diseasesArray: action.payload,
      };
    case Actions.SKIN_DIEASES_FAIL:
      return {
        ...state,
        diseasesArray: action.payload,
      };
      case Actions.APPOINTMENT_USER_PAYMENT_SUCCESS:
        return {
          ...state,
          diseasesArray: action.payload,
        };
    default:
      return state;
  }
};
