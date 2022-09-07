import { combineReducers } from "redux";
import auth from "./reducer/auth";
import skinCondition from "./reducer/skinCondition";

export default combineReducers({
  auth,
  skinCondition,
});
