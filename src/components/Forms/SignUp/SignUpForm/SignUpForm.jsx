import React from "react";
import Button from "../../../Buttons/Button";
import { helpLink } from "./SignUpForm.module.css";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Nom d'utilisateur"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control border-0 shadow-none"
          placeholder="Adrèsse mail"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Mot(s) de passe"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Confirmation mot(s) de passe"
        />
      </div>
      <div className={`${helpLink} mb-3`}>
        Déja inscrit? <Link to={"/"}>Se connecter</Link>
      </div>
      <Button type={"submit"}>S'INSCRIRE</Button>
    </form>
  );
};

export default SignUpForm;
