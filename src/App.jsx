import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./components/Forms/SignUp/SignUp";
import SignIn from "./components/Forms/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  const [isSignIn, setisSignIn] = useState(false);
  return (
    <div className="container w-auto">
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/home" Component={Home} />
      </Routes>
    </div>
  );
};

export default App;
