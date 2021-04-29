import React from "react";
import "./Login.css";
import SignUp from "../SignUp/SignUp";

const Login = () => {
  document.title = "Login";
  return (
    <div className="form-container">
      <SignUp></SignUp>
    </div>
  );
};

export default Login;
