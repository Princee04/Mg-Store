import React from "react";
import Button from "../../../Buttons/Button";
import { Link } from "react-router-dom";
import { helpLink } from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="email"
          className="form-control border-0 shadow-none"
          placeholder="Adrèsse mail"
        />
      </div>
      <div>
        <input
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Mot(s) de passe"
        />
      </div>
      <div className="text-secondary my-3">Mot(s) de passe oublié?</div>
      <div className={`${helpLink} mb-3`}>
        Pas encore de compte? <Link to={"/signup"}>S'inscrire</Link>
      </div>
      <Button type={"submit"}>SE CONNECTER</Button>
    </form>
  );
};

export default SignInForm;
