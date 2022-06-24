import * as types from "../Constant";

export const getFormsList = (payload) => {
  return {
    type: types.FORM_LIST_SUCCESS,
    payload,
  };
};

export const getFormsListObject = (payload) => {
  return {
    type: types.FORM_LIST_OBJ_SUCCESS,
    payload,
  };
};
