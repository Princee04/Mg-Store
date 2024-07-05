
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import SignUp from "./components/Forms/SignUp/SignUp";
import SignIn from './components/Forms/SignIn/SignIn'
import Articles from "./components/articles/Articles";
import Home from "./components/home/Home"
import Sell from "./components/Sell/Sell";
import Card from "./components/card/Card";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
   <>
      {/* <BrowserRouter>  */}
          <Routes>
              <Route path="/SignIn" element={<SignIn/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/panier" element={<Card/>} />
              <Route path="/" element={<Home/>}/>
              <Route path="/articles" element= {<Articles/>} />
              <Route path="/vendres" element= {<Sell/>} />
              <Route path="*" element=""/>
          </Routes>
      {/* </BrowserRouter> */}
        
   
    </>
  );
};


export default App;
