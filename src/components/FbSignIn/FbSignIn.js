import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import { UserContext } from "../../App";
import { FaFacebookSquare } from "react-icons/fa";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const FbSignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const provider = new firebase.auth.FacebookAuthProvider();
  const facebookSign = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const user = result.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <button className="btn-success" onClick={facebookSign}>
          <FaFacebookSquare/>
        <span className="p-2">Facebook</span>
      </button>
    </div>
  );
};

export default FbSignIn;
