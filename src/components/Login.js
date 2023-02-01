import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/userSlice";

const Login = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(state);
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div>
      <p>Name: {state.profile.name} </p>
      <p>Age: {state.profile.age}</p>
      <p>Email: {state.profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
