import { useRef } from "react"

import "./SignIn.css"
import "../Auth.css"

import {
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  KeyFill,
} from "react-bootstrap-icons"
import { ReactTyped } from "react-typed"
import { Link } from "react-router-dom"
import { showHidePassword } from "../../../helpers/helpers"

const SignIn = () => {
  const eyeRef = useRef(),
    eyeSlashRef = useRef()

  return (
    <div className="Auth">
      <div className="rounded-4 shadow SignIn">
        <div className="p-4 left">
          <h2 className="mb-4 fw-bold">Connexion</h2>
          <form action="#">
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <EnvelopeFill size={18} color="#13405a" />
                </span>
                <input
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Adrèsse mail"
                />
              </div>
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
            </div>

            <div className="forgotPassword mb-3">Mot de passe oublier?</div>

            <div className={`helpLink d-none mb-3`}>
              Pas encore de compte? <Link to={"/signup"}>S'inscrire</Link>
            </div>

            <div>
              <button className="btn">CONNEXION</button>
            </div>
          </form>
        </div>

        <div className="right p-4">
          <h2 className="fw-bold">MG-Store</h2>

          <img src="../../../../ispm.jpeg" className="ispm" />

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
              SE CONNECTER
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
