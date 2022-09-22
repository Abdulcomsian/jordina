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
  console.log("Token", token);
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
      console.log("Response Body :", body);
      const request = await axios(base_url + "registerStepTwo", {
        method: "POST",
        data: body,
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Response Question:", response);
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
  is_allergy,
  past_medication,
  current_medication,
  image,
  about_condition,
  women_conditon,
  appointment_id,
  token
) => {
  console.log("Token", token, is_allergy, image);
  return async (dispatch, getState) => {
    try {
      const body = {
        gender,
        height,
        weight,
        is_allergy,
        past_medication,
        current_medication,
        image,
        about_condition,
        women_conditon,
        appointment_id,
      };
      console.log("Action :", body);
      const request = await axios(base_url + "registerStepthree", {
        method: "POST",
        data: body,
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      return response;
      console.log("Response Male Allergie:", response);
    } catch (error) {}
  };
};
export const getAllSkinDiseases = (token) => {
  return async (dispatch, getState) => {
    try {
      const request = await axios(base_url + "getAllDiseases", {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Diseases Reposnse :", response.data.data);
      if (response.status === 200) {
        dispatch({
          type: Actions.SKIN_DIEASES_SUCCESS,
          payload: response.data.data.diseases,
        });
      } else {
        dispatch({
          type: Actions.SKIN_DIEASES_FAIL,
          payload: response.data.data.diseases,
        });
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};
export const getCalendly = (user_id, token) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        user_id,
      };
      const request = await axios(base_url + "getCalendy", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
        data: body,
      });
      const response = request;
      console.log("Calendly Reposnse :", response.data.data.doctor[0].calendy);
      if (response.status === 200) {
        return response;
      } else {
        return response;
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};
