import React from "react";
import { signUp, left, right, link, typedText } from "./SignUp.module.css";
import Title from "../../Title/Title";
import SignUpForm from "./SignUpForm/SignUpForm";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const SignUp = () => {
  return (
    <div className={`${signUp} rounded-4 shadow`}>
      <div className={`${left} rounded-4 text-white px-4 py-5`}>
        <Title size={"6"} text={"MG-Store"} />
        <div className={`${typedText} mb-2`}>
          <ReactTyped
            className={`text-center`}
            strings={[
              "Si vous avez déjà un compte, vous <br /> pouvez vous connectez",
            ]}
            typeSpeed={50}
            backSpeed={10}
            loop
          />
        </div>
        <Link to={"/"} className={`btn ${link}`}>
          SE CONNECTER
        </Link>
      </div>

      <div className={`${right} px-4 py-5 rounded-4`}>
        <Title size={"6"} text={"Inscription"} />
        <SocialNetworks />
        <div className="text-secondary my-3">
          ou utiliser votre @mail & mots de passse
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
