import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./Profile.css";

const Profile = () => {
  document.title = "Your Profile";
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="profile-style">
      <img src={loggedInUser.photo} alt="" />
      <h3>{loggedInUser.email}</h3>
      <h1>{loggedInUser.displayName || loggedInUser.name}</h1>
    </div>
  );
};

export default Profile;
