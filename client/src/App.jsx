import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Articles from "./components/Articles/Articles";
import Home from "./components/Home/Home";
import Sell from "./components/Sell/Sell";
import Card from "./components/Card/Card";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import { useState } from "react";
import Notification from "./components/Notification/Notification";

function App() {
  const [users, setUsers] = useState([
    {
      ID: 18745648465,
      name: "Default",
      email: "default@gmail.com",
      avatar: "no-avatar.jpg",
      password: "12345678",
      isLoggedIn: false,
    },
  ]);

  const [currentUser, setCurrentUser] = useState({});

  const handleSignUp = (newUser) => {
    setUsers((oldUsers) => [...oldUsers, newUser]);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.isLoggedIn) navigate("/");
  }, [currentUser]);

  const handleSignIn = (user) => {
    setUsers((oldUsers) => {
      user.isLoggedIn = true;
      const userIndex = users.findIndex(
        (user) => user.email === currentUser.email
      );
      oldUsers[userIndex] = user;
      return [...oldUsers];
    });
    setCurrentUser(user);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SignIn signIn={handleSignIn} users={users} setUsers={setUsers} />
          }
        />

        <Route
          path="/signup"
          element={<SignUp signUp={handleSignUp} users={users} />}
        />
        <Route path="/panier" element={<Card />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {currentUser.isLoggedIn && <Route path="/home" element={<Home />} />}
        <Route path="/articles" element={<Articles />} />
        <Route path="/vendres" element={<Sell />} />
      </Routes>
      <Notification />
    </>
  );
}

export default App;
