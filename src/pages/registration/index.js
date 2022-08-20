import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/userAction";
import "./register.css";

const Registration = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = state;

  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(signup(state));
  };

  return (
    <div className="">
      <form onSubmit={submitRegister}>
        <div className="FormContainer">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <div>
            <label>
              <b>Username</b>
            </label>
            <input
              placeholder="Username"
              name="name"
              id="psw-repeat"
              required
              value={name}
              onChange={handleInputs}
            />
          </div>

          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleInputs}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            required
            value={password}
            onChange={handleInputs}
          />

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
