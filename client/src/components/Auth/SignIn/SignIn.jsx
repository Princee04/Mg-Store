import React, { useRef, useState } from "react";

import "./SignIn.css";
import "../Auth.css";

import {
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  KeyFill,
} from "react-bootstrap-icons";
import { ReactTyped } from "react-typed";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getCurrentUser,
  isEmailAndPasswordMatching,
  isEmailhMatching,
  showHidePassword,
} from "../../../helpers/helpers";
import { toast } from "react-toastify";

const SignIn = ({ signIn, users, forgotPassword }) => {
  const eyeRef = useRef(),
    eyeSlashRef = useRef(),
    formRef = useRef();

  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      let currentUser = {};
      if (isEmailhMatching(users, data))
        throw new Error("Mot(s) de passe incorrect");
      else if (isEmailAndPasswordMatching(users, data)) {
        currentUser = isEmailAndPasswordMatching(users, data);
        signIn(currentUser);
        navigate(`/home`);
      } else {
        toast.info("Vous n'êtes pas encore inscrit !");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="Auth">
      <div className="rounded-4 shadow SignIn">
        <div className="p-4 left">
          <h2 className="mb-4 fw-bold">Connexion</h2>
          <form ref={formRef} action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <EnvelopeFill size={18} color="#13405a" />
                </span>
                <input
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Adrèsse mail"
                  {...register("email", {
                    required: "Adrèsse mail requis!",
                    minLength: { value: 16, message: "Minumum 16 caractères" },
                  })}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <KeyFill size={18} color="#13405a" />
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control shadow-none"
                  placeholder="Mot(s) de passe"
                  {...register("password", {
                    required: "Mot(s) de passe requis requis !",
                    minLength: {
                      value: 8,
                      message: "Minimum 8 caractères",
                    },
                    maxLength: {
                      value: 16,
                      message: "Maximun 16 caractères",
                    },
                  })}
                />
                <span
                  className="input-group-text"
                  onClick={(e) =>
                    showHidePassword(
                      e.currentTarget.previousSibling,
                      eyeRef.current,
                      eyeSlashRef.current
                    )
                  }
                >
                  <EyeFill ref={eyeRef} size={18} color="#13405a" />
                  <EyeSlashFill
                    ref={eyeSlashRef}
                    size={18}
                    className="d-none"
                    color="#13405a"
                  />
                </span>
              </div>
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </div>

            <div
              className="forgotPassword mb-3"
              onClick={() => {
                try {
                  if (getCurrentUser(users, email)) {
                    if (email) {
                      const ID = getCurrentUser(users, email).ID;
                      forgotPassword(ID);
                    } else
                      throw new Error("Veuillez entrez une adrèsse mail !");
                  } else
                    throw new Error(
                      "Adrèsse mail introuvable, veuillez vous inscrire !"
                    );
                } catch (error) {
                  toast.warning(error.message);
                }
              }}
            >
              Mot de passe oublier?
            </div>

            <div className={`helpLink d-none mb-3`}>
              Pas encore de compte? <Link to={"/signup"}>S'inscrire</Link>
            </div>

            <div>
              <button disabled={isSubmitting} className="btn">
                {isSubmitting ? "CHARGEMENT..." : "SE CONNECTER"}
              </button>
            </div>
          </form>
        </div>

        <div className="right p-4">
          <h2 className="fw-bold">MG-Store</h2>

          <div className="typedText my-3">
            <ReactTyped
              className={`text-center`}
              strings={[
                "Bonjour si vous n'avez pas encore de compte, veuillez vous inscrire !!!",
              ]}
              typeSpeed={50}
              backSpeed={10}
              loop
            />
          </div>

          <button className="btn">
            <Link to={"/signup"} className="nav-link">
              S'INSCRIRE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
