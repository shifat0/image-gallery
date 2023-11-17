import * as actionTypes from "./ActionTypes";

export const selectCategory = (category) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: category,
  };
};
