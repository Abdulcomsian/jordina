import * as Actions from "../actionTypes";
import axios from "axios";
var base_url = "https://topdecdecoratingapp.com/api/";


export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      console.log(email, password);
      const body = { email, password };
      const request = await axios(base_url + "admin/login", {
        method: "POST",
        data: body,
      });

      const response = request.data;
    } catch (err) {
      console.log(err?.response?.request);
      throw new Error(err.message);
    }
  };
};

