import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Articles from "./components/Articles/Articles"
import Home from "./components/Home/Home"
import Sell from "./components/Sell/Sell"
import Card from "./components/Card/Card"
import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./admin/AdminDashboard"
import SignIn from "./components/Auth/SignIn/SignIn"
import SignUp from "./components/Auth/SignUp/SignUp"
import Notification from "./components/Notification/Notification"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/panier" element={<Card />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/vendres" element={<Sell />} />
      </Routes>
      <Notification />
    </>
  )
}

export default App
