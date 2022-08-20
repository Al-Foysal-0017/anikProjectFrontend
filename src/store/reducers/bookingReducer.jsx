import {
  BOOKING_FAIL,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  CLEAR_ERRORS,
} from "../types/bookingConstants";

export const bookingReducer = (state = { allBooking: {} }, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        allBooking: action.payload,
      };

    case BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
