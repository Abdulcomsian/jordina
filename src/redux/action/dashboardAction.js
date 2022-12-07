import * as Actions from "../actionTypes";
import axios from "axios";
import url from "../../constant/url/api_url";

export const getUserDetail = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(url.base_url + "getLoggedInUser", {
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
      const request = await axios(url.base_url + "updateClientProfile", {
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
export const getClientOrder = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(url.base_url + "getCompletedOrders", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Response :", response);
      if (response.status === 200) {
        dispatch({
          type: Actions.GET_CLIENT_ORDER_SUCCESS,
          payload: response.data.data.orders,
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
export const getUnPaidOrder = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(url.base_url + "getCartItems", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Response UN_PAID :", response);
      if (response.status === 200) {
        dispatch({
          type: Actions.GET_CLIENT_UN_PAID_ORDER_SUCCESS,
          payload: response.data.data.orders,
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
export const removeUnPaidData = (order_id, token) => {
  return async (dispatch, getState) => {
    try {
      const body = { order_id };
      const request = await axios(url.base_url + "deleteOrder", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
        data: body,
      });
      const response = request;
      console.log("Delete UnPaid Data :", response);
      if (response.status === 200) {
        dispatch({
          type: Actions.REMOVE_UNPIAD_DATA_SUCCESS,
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
export const getUserMedication = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(url.base_url + "user-appointment", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Response User Medication :", response.data.data.appointments);
      if (response.status === 200) {
        dispatch({
          type: Actions.GET_USER_MEDICATION,
          payload: response.data.data.appointments,
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
