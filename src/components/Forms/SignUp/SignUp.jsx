import React from "react";
import { signUp, left, right } from "./SignUp.module.css";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
import SignUpForm from "./SignUpForm/SignUpForm";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";

const SignUp = () => {
  return (
    <div className={`${signUp} rounded-4 shadow`}>
      <div className={`${left} rounded-4 text-white px-4 py-5`}>
        <Title size={"6"} text={"Hello, Friend"} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button>SIGN IN</Button>
      </div>

      <div className={`${right} px-4 py-5 rounded-4`}>
        <Title size={"6"} text={"Sign Up"} />
        <SocialNetworks />
        <div className="text-secondary my-3">or use your email & password</div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
