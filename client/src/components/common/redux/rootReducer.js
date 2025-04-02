import { combineReducers } from "redux";
import fileReducer from "../../Home/homeSlice";

const rootReducer = combineReducers({
  files: fileReducer,
});

export default rootReducer;
