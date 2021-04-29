import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./SignIn.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import FbSignIn from "../FbSignIn/FbSignIn";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {
  document.title = "SignIn";
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordLength = e.target.value.length > 6;
      const passwordValidate = /\d{1}/.test(e.target.value);
      isFieldValid = passwordLength && passwordValidate;
    }
    if (isFieldValid) {
      const newUserInfo = { ...loggedInUser };
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          const newUserInfo = { ...res.user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log("user sign in", newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          setLoggedInUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  return (
    <div className="sing-in-height">
      <div className="sign-up-style ">
        <h3 className="text-danger">Existing User Sing In Here</h3>

        <form c onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onBlur={handleBlur}
            placeholder="Enter Your Email"
            required
          />
          <br />
          <input
            type="password"
            onBlur={handleBlur}
            name="password"
            placeholder="Enter Your Password"
            required
          />
          <br />
          <input type="submit" value="Sign In" className="btn btn-success" />
        </form>

        <div>
          <p className="p-2">
            Create Account ?
            <Link to="/signUp">
              {" "}
              <span className="text-danger p-2">Sign Up</span>
            </Link>
          </p>
        </div>
        <div className="social">
          <div className="m-2">
            <GoogleSignIn></GoogleSignIn>
          </div>
          <div className="m-2">
            <FbSignIn></FbSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
