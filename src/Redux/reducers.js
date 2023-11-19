import * as actionTypes from "./ActionTypes";

const INITIAL_STATE = {
  category: "",
  username: "",
  userId: null,
  token: null,
  loading: false,
  errMessage: "",
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        userId: action.payload.userId,
        token: action.payload.token,
      };
    case actionTypes.AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        errMessage: action.payload,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        username: "",
        userId: null,
        token: null,
      };
    default:
      return state;
  }
};
