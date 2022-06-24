import * as types from "./../Constant";

export const formListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FORM_LIST_SUCCESS:
      return { ...state, getFormsListRes: action.payload };
    case types.FORM_LIST_FAILURE:
      return { ...state, getFormsListRes: action.payload };

    case types.FORM_LIST_OBJ_SUCCESS:
      return { ...state, getFormsListObjectRes: action.payload };
    case types.FORM_LIST_OBJ_FAILURE:
      return { ...state, getFormsListObjectRes: action.payload };

    default:
      return state;
  }
};
