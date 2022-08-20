import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userAction";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { email, password } = state;

  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <div className="">
      <form onSubmit={submitLogin}>
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to login your account.</p>
          <hr />

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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
