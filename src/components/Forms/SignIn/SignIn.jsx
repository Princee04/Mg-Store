import React from "react";
import { signIn, left, right, link, typeText } from "./SignIn.module.css";
import Title from "../../Title/Title";
import SignInForm from "./SignInForm/SignInForm";
import SocialNetworks from "../../SocialNetworks/SocialNetworks";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

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
        <div className={`${typeText} mb-2`}>
          <ReactTyped
            className={`text-center`}
            strings={[
              "Bonjour si vous n'avez pas encore de compte, <br /> veuillez vous inscrire !!!",
            ]}
            typeSpeed={50}
            backSpeed={10}
            loop
          />
        </div>

        <Link to={"/signup"} className={`${link} btn`}>
          S'INSCRIRE
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
