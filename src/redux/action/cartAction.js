import * as Actions from "../actionTypes";
import axios from "axios";
var base_url = "http://127.0.0.1:8000/api/";

export const addToCart = (id, allProduct) => {
  return async (dispatch, getState) => {
    console.log("Add to Cart Product Id & Data :", id, allProduct);
    dispatch({
      type: Actions.ADD_TO_CART,
      id: id,
      allProduct: allProduct,
    });
  };
};
export const getAllCartProduct = (token) => {
  console.log("Token Action:", token);
  return async (dispatch, getState) => {
    try {
      const request = await axios(base_url + "getAllProducts", {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const response = request;
      console.log("Cart Product Response :", response.status);
      if (response.status === 200) {
        dispatch({
          type: Actions.CART_PRODUCT_FETCH_ALL,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: Actions.CART_PRODUCT_FETCH_FAIL,
          payload: response.data.data.products,
        });
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};
export const removeCartItems = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: Actions.REMOVE_TO_CART,
      id: id,
    });
  };
};
export const addQuantity = (id, addedItems) => {
  console.log("Cart Action :", addedItems);
  return async (dispatch, getState) => {
    dispatch({
      type: Actions.ADD_QUANTITY,
      id: id,
      addedItems: addedItems,
    });
  };
};
export const subtractQuantity = (id, addedItems) => {
  console.log("Cart Action :", addedItems);
  return async (dispatch, getState) => {
    dispatch({
      type: Actions.SUBTRACT_QUANTITY,
      id: id,
      addedItems: addedItems,
    });
  };
};
export const checkOutPayment = (
  amount,
  cardID,
  token,
  addedItems,
  order_id
) => {
  console.log("Check out Action :", amount, cardID, token);
  return async (dispatch, getState) => {
    try {
      const body = { amount, cardID, order_id };
      const request = await axios(base_url + "payment", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
        data: body,
      });
      console.log("Response :", request);
      const response = request;
      console.log("Response :", response);
      if (request.status === 200) {
        dispatch({
          type: Actions.CART_PRODUCT_PAYMENT_SUCCESS,
        });
        return response;
      } else {
        dispatch({
          type: Actions.CART_PRODUCT_PAYMENT_FAIL,
          payload: addedItems,
        });
        return response;
      }
    } catch (error) {
      var err = error.response.data.secret_key;
      console.log("Sce :", err);
      return err.toString();
    }
  };
};
export const refreshProdcutFlag = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: Actions.REFRESH_PRODUCT_FLAG,
    });
  };
};
export const orderPlace = (newItem, token) => {
  return async (dispatch, getState) => {
    try {
      const body = newItem;
      const request = await axios(base_url + "order", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
        data: body,
      });
      console.log("Response :", request);
      const response = request;
      console.log("Response Order:", response.data.data.order.id);
      if (request.status === 200) {
        dispatch({
          type: Actions.ORDER_PLACE_SUCCESS,
          payload: response.data.data.order.id,
        });
        return response;
      } else {
        dispatch({
          type: Actions.CART_PRODUCT_PAYMENT_FAIL,
        });
        return response;
      }
    } catch (error) {
      var err = error.response.data.secret_key;
      console.log("Sce :", err);
      return err.toString();
    }
  };
};
export const refreshFlag = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: Actions.REFRESH_ORDER_FLAG,
    });
  };
};
export const orderRecieptFlag = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: Actions.REFRESH_ORDER_RECIEPT,
    });
  };
};
