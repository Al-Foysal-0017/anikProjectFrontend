import jwt_decode from "jwt-decode";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  // LOGOUT_SUCCESS,
  // LOGOUT_FAIL,
  CLEAR_ERRORS,
  LOGOUT,
} from "../types/userConstants.js";

const initState = {
  loading: false,
  error: "",
  token: "",
  user: "",
  message: null,
};

const verifyToken = (token) => {
  const decodeToken = jwt_decode(token);
  const expiresIn = new Date(decodeToken.exp * 1000);
  if (new Date() > expiresIn) {
    localStorage.removeItem("token");
    return null;
  } else {
    return decodeToken;
  }
};
const token = localStorage.getItem("token");
if (token) {
  const decoded = verifyToken(token);
  if (decoded) {
    initState.token = token;
    const { user } = decoded;
    initState.user = user;
  }
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
      const decoded = verifyToken(action.payload);
      const { user } = decoded;
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: user,
      };

    // case LOGOUT_SUCCESS:
    //   return {
    //     loading: false,
    //     user: null,
    //     isAuthenticated: false,
    //   };
    case LOGOUT:
      return {
        ...state,
        token: "",
        user: "",
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    // case LOGOUT_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
