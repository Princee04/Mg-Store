import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./components/Forms/SignUp/SignUp";
// import SignIn from "./components/Forms/SignIn/SignIn";

const App = () => {
  return (
    <div className="container w-auto">
      {/* <SignIn /> */}
      <SignUp />
    </div>
  );
};

export default App;
