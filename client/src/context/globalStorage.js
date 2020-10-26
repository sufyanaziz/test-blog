import React, { useContext, useReducer, createContext } from "react";
import axios from "../config/axios";

import userReducer, { initialState as initialStateUser } from "./reducers/user";
import blogReducer, { initialState as initialStateBlog } from "./reducers/blog";

import {
  SET_UNAUTHENTICATION,
  SET_USER,
  LOADING_USER,
  SET_ERROR_USER,
  CLEAR_ERROR,
  SET_BLOG,
  LOADING_BLOG,
  SET_ERROR_BLOG,
  CLEAR_ERROR_BLOG,
  SET_BLOG_DETAIL,
} from "./types";

const Context = createContext();

const setAuthorization = token => {
  const IdToken = `Bearer ${token}`;
  localStorage.setItem("idToken", IdToken);
  axios.defaults.headers.common["Authorization"] = IdToken;
};

const ContextProvider = props => {
  const [userState, userDispatch] = useReducer(userReducer, initialStateUser);
  const [blogState, blogDispatch] = useReducer(blogReducer, initialStateBlog);

  const login = data => {
    userDispatch({ type: LOADING_USER });
    axios
      .post("/user/login", data)
      .then(res => {
        setAuthorization(res.data.token);
        getUserData();
      })
      .catch(error => {
        userDispatch({ type: SET_ERROR_USER, payload: error.response.data });
      });
  };

  const logout = history => {
    localStorage.removeItem("idToken");
    delete axios.defaults.headers.common["Authorization"];
    userDispatch({ type: SET_UNAUTHENTICATION });
    history.push("/");
  };

  const getUserData = () => {
    userDispatch({ type: LOADING_USER });
    axios
      .get("/user/get_user")
      .then(res => {
        userDispatch({ type: SET_USER, payload: res.data.data });
      })
      .catch(error => {});
  };

  const getDataBlog = () => {
    blogDispatch({ type: LOADING_BLOG });
    axios
      .get("/blog/getAll")
      .then(res => {
        blogDispatch({ type: SET_BLOG, payload: res.data.data });
      })
      .catch(err => {
        blogDispatch({ type: SET_ERROR_BLOG, payload: err.response.data });
      });
  };

  const getDetailBlog = id => {
    blogDispatch({ type: LOADING_BLOG });
    axios
      .get(`/blog/get_detail/${id}`)
      .then(res => {
        blogDispatch({ type: SET_BLOG_DETAIL, payload: res.data.data });
      })
      .catch(err => {
        blogDispatch({ type: SET_ERROR_BLOG, payload: err.response.data });
      });
  };

  const postBlog = (data, open, openAlert) => {
    blogDispatch({ type: LOADING_BLOG });
    axios
      .post("/blog/post", data)
      .then(() => {
        open(false);
        openAlert(true);
        getDataBlog();
      })
      .catch(err => {
        blogDispatch({ type: SET_ERROR_BLOG, payload: err.response.data });
      });
  };

  const clearError = () => {
    userDispatch({ type: CLEAR_ERROR });
  };

  return (
    <Context.Provider
      value={{
        user: {
          ...userState,
          login,
          logout,
          clearError,
          getUserData,
        },
        blog: {
          ...blogState,
          getDataBlog,
          postBlog,
          getDetailBlog,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
