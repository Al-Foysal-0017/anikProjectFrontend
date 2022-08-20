import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/Container";
import { getAsingleUserBookings } from "../../store/actions/bookingAction";
import "./profile.css";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const {
    allBooking: { bookings },
  } = useSelector((state) => state.booking);
  console.log(bookings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsingleUserBookings(user?._id));
  }, [dispatch, user?._id]);
  return (
    <Container>
      <div className="profile__header">My Profile</div>
      <hr />
      <div className="profile__container">
        <div className="profile__container__item">
          Name:{" "}
          <div className="profile__container__item__value">{user?.name}</div>
        </div>
        <hr />
        <div className="profile__container__item">
          Email:{" "}
          <div className="profile__container__item__value">{user?.email}</div>
        </div>
        <hr />
        <div className="profile__container__item">
          Registration ID:{" "}
          <div className="profile__container__item__value">{user?._id}</div>
        </div>
        <hr />

        <div className="myAllBooking">
          <div className="myAllBookingTitle">My All Booking</div>
          {bookings?.map((item, index) => (
            <div key={index} className="myAllBookingContainer">
              <div className="myAllBookingValue">
                Created at: {item?.createdAt}
              </div>
              <div className="myAllBookingValue">
                Booking Date: {item?.date}
              </div>
              <div className="myAllBookingValue">
                Total Member: {item?.member}
              </div>
              <div className="myAllBookingValue">Booking For: {item?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
