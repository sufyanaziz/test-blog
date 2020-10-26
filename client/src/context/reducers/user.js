import {
  SET_AUTHENTICATION,
  SET_UNAUTHENTICATION,
  SET_USER,
  LOADING_USER,
  SET_ERROR_USER,
  CLEAR_ERROR,
} from "../types";

export const initialState = {
  authenticated: false,
  user_details: {},
  loading: false,
  error: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATION:
      return initialState;
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user_details: { ...action.payload },
        error: {},
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR_USER:
      return {
        ...state,
        error: { ...action.payload },
        loading: false,
      };
    case CLEAR_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
