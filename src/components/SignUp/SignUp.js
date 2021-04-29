import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import FbSignIn from "../FbSignIn/FbSignIn";
import firebaseConfig from "../Login/firebase.config";
import "./SignUp.css";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
  document.title = "SignUp";
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "name") {
      isFieldValid = /\S+\S/.test(e.target.value);
    }
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
  const handleNewUserSignUp = (e) => {
    if (loggedInUser.email && loggedInUser.password && loggedInUser.name) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          loggedInUser.email,
          loggedInUser.password
        )
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          setLoggedInUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserName = (name) => {
    console.log(name);
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="sign-up-height">
      <div className="sign-up-style">
        <h3 className="text-success">New User Sing Up Here!</h3>

        <form onSubmit={handleNewUserSignUp}>
          <input
            type="text"
            name="name"
            onBlur={handleBlur}
            placeholder="Enter Your name"
            required
          />
          <br />
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
            id="pass"
            placeholder="Enter Your Password"
            required
          />
          <br />
          <input
            type="password"
            onBlur={handleBlur}
            name="password"
            id="pass"
            placeholder="Confirm Your Password"
            required
          />
          <br />
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-outline-success"
          />

          <div>
            <p>
              Already Have an Account?
              <Link to="/signIn">
                <span className="text-danger p-2">Sign In</span>
              </Link>
            </p>
          </div>
          <div className="social">
            <div>
              <FbSignIn></FbSignIn>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
