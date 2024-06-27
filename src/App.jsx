
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./components/Forms/SignUp/SignUp";

import Home from "./components/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
   <>
      <BrowserRouter> 
          <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
            <Route path="/" element={<Home/>}/>
            <Route path="*" element=""/>
          </Routes>
      </BrowserRouter>
        
   
    </>
  );
};


export default App;
