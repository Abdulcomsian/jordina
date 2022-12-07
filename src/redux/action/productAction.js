import * as Actions from "../actionTypes";
import axios from "axios";
import url from "../../constant/url/api_url";

export const getAllProduct = (token) => {
  console.log("Token Action:", token)
  return async (dispatch, getState) => {
    try {
      const request = await axios(url.base_url + "getAllProducts", {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Min Price Product :", response.data.data)
      if (response.status === 200) {
        dispatch({
          type: Actions.PRODUCT_FETCH_ALL_SUCCESS,
          payload: response.data.data,
        });
        // dispatch({
        //   type: Actions.CART_PRODUCT_FETCH_ALL,
        //   payload: response.data.data,
        // });
        
      } else {
        dispatch({
          type: Actions.PRODUCT_FETCH_ALL_FAIL,
          payload: response.data.data.products,
        });
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};
export const getAllProductSkinType = (token) => {
  console.log("Token Category :", token)
  return async (dispatch, getState) => {
    try {
      const request = await axios(url.base_url  + "getAllProductCategories", {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      if (response.status === 200) {
        dispatch({
          type: Actions.PRODUCT_FETCH_TYPE_SUCCESS,
          payload: response.data.data.skin_type,
        });
      } else {
        dispatch({
          type: Actions.PRODUCT_FETCH_TYPE_FAIL,
          payload: response.data.data.skin_type,
        });
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};


