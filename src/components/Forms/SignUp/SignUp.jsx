import React from "react";
import { signUp, left, right, link } from "./SignUp.module.css";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
import SignUpForm from "./SignUpForm/SignUpForm";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={`${signUp} rounded-4 shadow`}>
      <div className={`${left} rounded-4 text-white px-4 py-5`}>
        <Title size={"6"} text={"MG-Store"} />
        <p>
          Si vous avez déjà un compte, vous pouvez <br /> vous connectez
        </p>
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
