import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./components/Forms/SignUp/SignUp";
import SignIn from "./components/Forms/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container w-auto">
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </div>
  );
};

export default App;
