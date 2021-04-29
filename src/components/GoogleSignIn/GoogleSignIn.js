import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import firebaseConfig from "../Login/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const GoogleSignIn = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  const handleWithGoogleSign = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSigned: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        // setLoggedInUser(signedInUser);
        history.push(from);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  return (
    <div>
      <Button className="bg-danger border-0" onClick={handleWithGoogleSign}>
        <FaGoogle />
        <span className="p-3">Sign With Google</span>
      </Button>
    </div>
  );
};

export default GoogleSignIn;
