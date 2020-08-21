import React from "react";
import ProfileComponent from "../FrontEndFiles/Components/Profile";
import AppBar from "../FrontEndFiles/Components/AppBar";
import IsLoading from "../FrontEndFiles/Components/IsLoading";

const Profile = (props) => {
  return (
    <>
      <AppBar />
      <ProfileComponent />
    </>
  );
};

export default Profile;
