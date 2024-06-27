
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import SignUp from "./components/Forms/SignUp/SignUp";
import SignIn from './components/Forms/SignIn/SignIn'
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
   <>
      {/* <BrowserRouter>  */}
          <Routes>
              <Route path="/SignIn" element={<SignIn/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/" element={<Home/>}/>
              <Route path="*" element=""/>
          </Routes>
      {/* </BrowserRouter> */}
        
   
    </>
  );
};


export default App;
