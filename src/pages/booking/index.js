import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  let navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [state, setState] = useState({
    userId: user?._id,
    name: user?.name,
    email: user?.email,
    mobile: "",
    date: "",
    member: "",
  });
  const { name, email, mobile, date, member } = state;
  //   console.log(state);

  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`/api/create/bookig`, state, config);
      console.log(data);
      navigate("/profile");
    } catch (error) {
      toast.error(
        error.response.data.errors.message || "Something went wrong. Try again."
      );
    }
  };
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      ;
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>Booking</h1>
          <p>Please fill in this form to booking.</p>
          <hr />

          <label>
            <b>Username</b>
          </label>
          <input
            placeholder="Name"
            name="name"
            id="psw-repeat"
            // required
            value={name}
            onChange={handleInputs}
          />

          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            // required
            value={email}
            onChange={handleInputs}
          />

          <label>
            <b>Mobile</b>
          </label>
          <input
            placeholder="Mobile"
            name="mobile"
            id="psw"
            // required
            value={mobile}
            onChange={handleInputs}
          />

          <label>
            <b>Date</b>
          </label>
          <input
            placeholder="Date"
            name="date"
            id="psw"
            // required
            value={date}
            onChange={handleInputs}
          />

          <label>
            <b>Member</b>
          </label>
          <input
            placeholder="Member"
            name="member"
            id="psw"
            // required
            value={member}
            onChange={handleInputs}
          />

          <button type="submit" className="registerbtn">
            Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
