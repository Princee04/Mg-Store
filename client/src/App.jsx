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
import PopUp from "./components/PopUp/PopUp";
import { getCurrentUser } from "./helpers/helpers";
import { toast } from "react-toastify";

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

  const [forgotID, setForgotID] = useState();
  const [code, setCode] = useState();

  const [isSignOut, setIsSignOut] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState();

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

  const confirmSignOut = (user) => {
    setUsers((oldUsers) => {
      user.isLoggedIn = false;
      const userIndex = users.findIndex(
        (user) => user.email === currentUser.email
      );
      oldUsers[userIndex] = user;
      return [...oldUsers];
    });
    setCurrentUser(user);
    setIsSignOut(false);
    navigate("/");
  };

  const deniedSignOut = () => {
    setIsSignOut(false);
  };

  const handleSignOut = (ID) => {
    setIsSignOut(true);
  };

  const handleForgotPassword = (ID) => {
    setIsForgotPassword(true);
    setForgotID(ID);
  };

  const confirmChangePassword = (code, newPassword) => {
    try {
      if (forgotID === Number(code)) {
        const newUsers = [...users];
        const user = newUsers.find((user) => user.ID === Number(code));
        const userIndex = newUsers.findIndex(
          (user) => user.ID === Number(code)
        );
        user.password = newPassword;
        newUsers[userIndex] = user;
        console.log(newUsers);

        setUsers(newUsers);
        setIsForgotPassword(false);
        setForgotID("");
        setCode("");
        setNewPassword("");
      } else throw new Error("Code invalide");
    } catch (error) {
      toast.warning(error.message);
    }
  };

  const deniedChangePassword = () => {
    setIsForgotPassword(false);
  };

  return (
    <>
      {isSignOut && (
        <PopUp
          title={"Déconnexion ?"}
          confirm={() => confirmSignOut(currentUser)}
          denied={deniedSignOut}
        >
          Souhaiter-vous vraiment vous déconnecter ?
        </PopUp>
      )}

      {isForgotPassword && (
        <PopUp
          title={"Mot de passe oublier ?"}
          confirm={() => confirmChangePassword(code, newPassword)}
          denied={deniedChangePassword}
        >
          <label className="my-3 text-center" htmlFor="code">
            Entrer ce dode puis votre nouveau mot(s) de passe
          </label>
          <div className="text-success mb-3">{forgotID}</div>
          <div>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Code"
              onChange={(e) => setCode(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Nouveau mot(s) de passe"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </PopUp>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <SignIn
              signIn={handleSignIn}
              users={users}
              forgotPassword={handleForgotPassword}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <SignUp
              signUp={handleSignUp}
              users={users}
              forgotPassword={handleForgotPassword}
            />
          }
        />
        <Route path="/panier" element={<Card />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {currentUser.isLoggedIn && (
          <Route
            path="/home"
            element={
              <Home
                currentUser={currentUser}
                users={users}
                signOut={handleSignOut}
              />
            }
          />
        )}
        <Route
          path="/articles"
          element={
            <Articles
              currentUser={currentUser}
              users={users}
              signOut={handleSignOut}
            />
          }
        />
        <Route
          path="/vendres"
          element={
            <Sell
              currentUser={currentUser}
              users={users}
              signOut={handleSignOut}
            />
          }
        />
      </Routes>
      <Notification />
    </>
  );
}

export default App;
