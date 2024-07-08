import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Wave from "../Wave/Wave";
const Home = ({ currentUser, signOut }) => {
  return (
    <div className="container-css">
      <Header page="home" currentUser={currentUser} signOut={signOut} />
      <Body />
      <Wave />
    </div>
  );
};

export default Home;
