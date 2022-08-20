// "proxy": "http://192.168.1.100:5000"

import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
} from "../types/userConstants";
import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { authenticate } from "../../helpers/auth";

// Login
export const login = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/login`, loginData, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.token });

    localStorage.setItem("token", data.token);
    // window.location.reload();
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response.data.message || "Something went wrong. Try again.",
    });
  }
};

// SignUp
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/register`, userData, config);
    console.log(data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.token });
    localStorage.setItem("token", data.token);
    // window.location.reload();
  } catch (error) {
    // console.log(error.response.data);
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data || "Something went wrong. Try again.",
    });
  }
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Clearing Message
export const clearMessage = () => async (dispatch) => {
  dispatch({ type: CLEAR_MESSAGE });
};
