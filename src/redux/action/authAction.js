import * as Actions from "../actionTypes";
import axios from "axios";
var base_url = "http://127.0.0.1:8000/api/";

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const body = { email, password };
      const request = await axios(base_url + "login", {
        method: "POST",
        data: body,
      });
      const response = request;
      if (response.status === 200) {
        localStorage.setItem("authenticatedUser", true);
        dispatch({
          type: Actions.LOGIN_SUCCESS,
          payload: response.data,
        });
      }
    } catch (err) {
      localStorage.setItem("authenticatedUser", false);
      dispatch({
        type: Actions.LOGIN_FAIL,
        payload: err.response.data,
      });
      console.log("Error :", err.response.data);
      throw new Error(err.response.data.message);
    }
  };
};
export const register = (
  first_name,
  last_name,
  email,
  password,
  confrimPassword,
  address,
  state
) => {
  console.log("Here Auth Register");
  return async (dispatch, getState) => {
    try {
      const body = {
        first_name,
        last_name,
        email,
        password,
        confrimPassword,
        address,
        state,
      };
      console.log("Register Body :", body);
      const request = await axios(base_url + "register", {
        method: "POST",
        data: body,
      });
      const response = request;
      console.log("Resgiter Response :", response);
      if (response.status === 200) {
        localStorage.setItem("authenticatedUser", true);
        dispatch({
          type: Actions.REGISTER_SUCCESS,
          payload: response.data,
        });
        // console.log("API Response :", response.data.data.token)
        // console.log("API Response :", response.request.response.status)
        return response;
      }
    } catch (err) {
      // console.log("Resgiter Catch Error :", err.response.data.message)
      localStorage.setItem("authenticatedUser", false);
      dispatch({
        type: Actions.REGISTER_FAIL,
        payload: err.response.data,
      });
     return err.response;
    }
  };
};
export const logout = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(base_url + "logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = request;
      console.log("Response Logout :", response);
      if (response.status === 200) {
        localStorage.setItem("authenticatedUser", false);
        console.log("Logout Response :", response.data.status);
        dispatch({
          type: Actions.LOGOUT_SUCCESS,
          payload: response.data,
        });
      }
    } catch (err) {
      dispatch({
        type: Actions.LOGIN_FAIL,
        payload: err.response.data,
      });
      // console.log("Error :", err.response.data)
      throw new Error(err.response.data.message);
    }
  };
};
