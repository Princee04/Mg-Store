// src/App.jsx
import React from "react"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Home from "./components/Home/Home"
import SignIn from "./components/Auth/SignIn/SignIn"
import Card from "./components/Card/Card"
import AdminDashboard from "./admin/AdminDashboard"
import Articles from "./components/Articles/Articles"
import Sell from "./components/Sell/Sell"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import SignUp from "./components/Auth/SignUp/SignUp"
import Notification from "./components/Notification/Notification"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Routes protégées */}
        <Route path="/panier" element={<PrivateRoute element={<Card />} />} />
        <Route
          path="/admin"
          element={<PrivateRoute element={<AdminDashboard />} />}
        />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route
          path="/articles"
          element={<PrivateRoute element={<Articles />} />}
        />
        <Route path="/sells" element={<PrivateRoute element={<Sell />} />} />
      </Routes>
      <Notification />
    </>
  )
}

export default App
