import {
  SET_BLOG,
  LOADING_BLOG,
  SET_ERROR_BLOG,
  SET_BLOG_DETAIL,
} from "../types";

export const initialState = {
  loading: false,
  content: [],
  content_detail: {},
  error: {},
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case SET_BLOG:
      return {
        ...state,
        loading: false,
        error: {},
        content: [...action.payload],
      };
    case SET_BLOG_DETAIL:
      return {
        ...state,
        loading: false,
        error: {},
        content_detail: { ...action.payload },
      };
    case LOADING_BLOG:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR_BLOG:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
