import React from "react";
import { signIn, left, right } from "./SignIn.module.css";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
import SignInForm from "./SignInForm/SignInForm";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";

const SignIn = () => {
  return (
    <div className={`${signIn} rounded-4 shadow`}>
      <div className={`${left} px-4 py-5`}>
        <Title size={"6"} text={"Sign In"} />
        <SocialNetworks />
        <div className="text-secondary mb-3">or use your email & password</div>
        <SignInForm />
      </div>

      <div className={`${right} px-4 py-5 text-white rounded-4`}>
        <Title size={"6"} text={"Hello, Friend"} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button>SIGN UP</Button>
      </div>
    </div>
  );
};

export default SignIn;
