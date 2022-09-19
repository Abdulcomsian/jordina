import { combineReducers } from "redux";
import auth from "./reducer/auth";
import skinCondition from "./reducer/skinCondition";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";
import dashBoardReducer from "./reducer/dashboardReducer";

export default combineReducers({
  auth,
  skinCondition,
  productReducer,
  cartReducer,
  dashBoardReducer
});
