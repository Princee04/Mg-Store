import React, { useRef, useState } from "react";
import "./SignUp.css";
import "../Auth.css";
import {
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  FileImageFill,
  KeyFill,
  PersonFill,
} from "react-bootstrap-icons";
import { ReactTyped } from "react-typed";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getParticularID,
  isEmailAlreadyUsed,
  isValidFile,
  showHidePassword,
} from "../../../helpers/helpers";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = ({ signUp, users }) => {
  const eyeRef = useRef(),
    eyeSlashRef = useRef(),
    formRef = useRef();

  const [avatar, setAvatar] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Utilisateur a crée
      let newUser = {};

      // Adrèsse mail déja utilisé ?
      if (!isEmailAlreadyUsed(users, data.email)) {
        // Utilisation d'un avatar ?
        if (avatar) {
          // Avatar valide ?
          if (isValidFile(avatar)) {
            console.log(avatar);
            newUser = { ID: getParticularID(), ...data, avatar: avatar.name };

            const formData = new FormData();
            formData.append("file", avatar);
            formData.append("ID", newUser.ID);

            axios
              .post("http://localhost:3001/upload", formData)
              .then((res) => console.log(res))
              .catch((er) => console.log(er));
          } else
            throw new Error(
              "Format de fichier non valide, utiliser (png, jpg, jpeg)"
            );
        } else {
          newUser = {
            ID: getParticularID(),
            ...data,
            avatar: "no-avatar.jpg",
            isLoggedIn: false,
          };
        }

        signUp(newUser);
        formRef.current.reset();
        toast.success(
          "Inscription réussie, vous pouvez maintenant vous connectez"
        );
        navigate("/");
      } else throw new Error("Adrèsse mail déja utilisé");
    } catch (error) {
      toast.warning(error.message);
    } finally {
      setAvatar("");
    }
  };

  return (
    <div className="Auth">
      <div className="rounded-4 shadow SignUp">
        <div className="left p-4">
          <h2 className="fw-bold">MG-Store</h2>

          <div className="typedText my-3">
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

          <button className="btn">
            <Link to={"/"} className="nav-link">
              SE CONNECTER
            </Link>
          </button>
        </div>

        <div className="p-4 right">
          <h2 className="mb-4 fw-bold">Inscription</h2>
          <form ref={formRef} action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <PersonFill size={18} color="#13405a" />
                </span>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Nom d'utilisateur"
                  {...register("name", {
                    required: "Nom d'utilisateur requis!",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 caractères",
                    },
                    maxLength: {
                      value: 12,
                      message: "Maximum 12 caractères",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <div className="text-danger">{errors.name.message}</div>
              )}
            </div>

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
                    required: "Mot(s) de passe requis !",
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

            <div className="form-group mb-3">
              <div className="input-group">
                <input
                  type="file"
                  className="form-control shadow-none"
                  onChange={(e) => setAvatar(e.currentTarget.files[0])}
                />
                <span className="input-group-text">
                  <FileImageFill size={18} color="#13405a" />
                </span>
              </div>
            </div>

            <div className={`helpLink d-none mb-3 `}>
              Déja inscrit? <Link to={"/"}>Se connecter</Link>
            </div>

            <div>
              <button disabled={isSubmitting} className="btn">
                {isSubmitting ? "CHARGEMENT..." : "S'INSCRIRE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
