import axios from "axios";
import {
  BOOKING_FAIL,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  CLEAR_MESSAGE,
  CLEAR_ERRORS,
} from "../types/bookingConstants";

export const getAsingleUserBookings = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_REQUEST });
    const { data } = await axios.get(`/api/allbooking/${id}`);
    // console.log(data);
    dispatch({
      type: BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_FAIL,
      payload: error.response.data.message || "Something went wrong.",
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
