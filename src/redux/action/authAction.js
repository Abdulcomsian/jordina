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
    } catch (err) {
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
      if (response.status == 200) {
        dispatch({
          type: Actions.REGISTER_SUCCESS,
          payload: response.data,
        });
        // console.log("API Response :", response.data.data.token)
        // console.log("API Response :", response.request.response.status)
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
