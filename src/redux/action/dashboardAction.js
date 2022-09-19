import * as Actions from "../actionTypes";
import axios from "axios";
var base_url = "http://127.0.0.1:8000/api/";

export const getUserDetail = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(base_url + "getLoggedInUser", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Login user Data", response);
      if (response.status === 200) {
        dispatch({
          type: Actions.GET_LOGIN_DATA_SUCCESS,
          payload: response.data.data,
        });
      } else {
        return response.message;
      }
    } catch (error) {
      return error.response;
    }
  };
};
export const updateClientProfile = (
  first_name,
  last_name,
  phone_number,
  email,
  address,
  token
) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        first_name,
        last_name,
        phone_number,
        email,
        address,
      };
      const request = await axios(base_url + "updateClientProfile", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
        data: body,
      });
      const response = request;
      if (response.status === 200) {
        dispatch({
          type: Actions.UPDATE_CLIENT_PROFILE_SUCCESS,
          payload: response.data,
        });
        return response.status;
      } else {
        return response.message;
      }
    } catch (error) {
      return error.response;
    }
  };
};
