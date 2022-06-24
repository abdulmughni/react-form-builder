import { combineReducers } from "redux";
import { formListReducer } from "./FormList";

const reducersObj = {
  formListReducer,
};

export default combineReducers(reducersObj);
