import * as actionTypes from "./ActionTypes";

const INITIAL_STATE = {
  category: "",
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
