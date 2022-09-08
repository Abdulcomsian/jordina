import * as Actions from "../actionTypes";
import axios from "axios";
var base_url = "http://127.0.0.1:8000/api/";

export const skinConditionTest = (
  skin_condition,
  question_1,
  question_2,
  question_3,
  question_4,
  question_5,
  question_6,
  token
) => {
  console.log("Token", token)
  return async (dispatch, getState) => {
    try {
      const body = {
        skin_condition,
        question_1,
        question_2,
        question_3,
        question_4,
        question_5,
        question_6,
      };
      console.log("Response Body :", body)
      const request = await axios(base_url + "registerStepTwo", {
        method: "POST",
        data: body,
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = request;
      console.log("Response Question:", response.status);
      if (response.status === 200) {
        dispatch({
          type: Actions.SKIN_TEST_SUCCESS,
          payload: response.data,
        });
        return response;
      }
    } catch (err) {
      dispatch({
        type: Actions.SKIN_TEST_FAIL,
        payload: err.response.data,
      });
      //   console.log("Error Question:", err.response.data)
      throw new Error(err.response.message);
    }
  };
};

export const maleAllergieExistHandler = (
  gender,
  height,
  weight,
  past_medication,
  current_medication,
  image,
  token
) => {
  console.log("Token", token)
  return async (dispatch, getState) => {
    try {
      const body = {
        gender,
        height,
        weight,
        past_medication,
        current_medication,
        image,
      };
      console.log("Action :", body);
      const request = await axios(base_url + "registerStepthree", {
        method: "POST",
        data: body,
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = request;
      return response;
      console.log("Response Male Allergie:", response);
    } catch (error) {}
  };
};
