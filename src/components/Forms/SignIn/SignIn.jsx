import React from "react";
import { signIn, left, right, link } from "./SignIn.module.css";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
import SignInForm from "./SignInForm/SignInForm";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={`${signIn} rounded-4 shadow`}>
      <div className={`${left} px-4 py-5`}>
        <Title size={"6"} text={"Connexion"} />
        <SocialNetworks />
        <div className="text-secondary mb-3">
          ou utiliser votre @mail & mots de passse
        </div>
        <SignInForm />
      </div>

      <div className={`${right} px-4 py-5 text-white rounded-4`}>
        <Title size={"6"} text={"MG-Store"} />
        <p>
          Bienvenue, si vous n'avez pas encore de compte <br /> veuillez vous
          inscrire !
        </p>

        <Link to={"/signup"} className={`${link} btn`}>
          S'INSCRIRE
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
