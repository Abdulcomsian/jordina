import * as Actions from "../actionTypes";

const initialState = {
  productArray: [],
  productTypeArray: [],
  minProductPrice: null,
  maxProductPrice: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.PRODUCT_FETCH_ALL_SUCCESS:
      return {
        ...state,
        productArray: action.payload.products,
        minProductPrice: action.payload.min_price,
        maxProductPrice: action.payload.max_price,
      };
    case Actions.PRODUCT_FETCH_ALL_FAIL:
      return {
        ...state,
        productArray: action.payload,
      };
    case Actions.PRODUCT_FETCH_TYPE_SUCCESS:
      return {
        ...state,
        productTypeArray: action.payload,
      };
    case Actions.PRODUCT_FETCH_TYPE_FAIL:
      return {
        ...state,
        productTypeArray: action.payload,
      };
    default:
      return state;
  }
};
