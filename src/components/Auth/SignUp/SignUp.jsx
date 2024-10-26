import { useRef } from "react"
import "./SignUp.css"
import "../Auth.css"
import {
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  FileImageFill,
  KeyFill,
  PersonFill,
} from "react-bootstrap-icons"
import { ReactTyped } from "react-typed"
import { Link } from "react-router-dom"
import { showHidePassword } from "../../../helpers/helpers"

const SignUp = () => {
  const eyeRef = useRef(),
    eyeSlashRef = useRef()

  return (
    <div className="Auth">
      <div className="rounded-4 shadow SignUp">
        <div className="left p-4">
          <h2 className="fw-bold">MG-Store</h2>

          <img src="../../../../ispm.jpeg" className="ispm" />

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
          <form>
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <PersonFill size={18} color="#13405a" />
                </span>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Nom d'utilisateur"
                />
              </div>
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

            <div className="form-group mb-3">
              <div className="input-group">
                <input type="file" className="form-control shadow-none" />
                <span className="input-group-text">
                  <FileImageFill size={18} color="#13405a" />
                </span>
              </div>
            </div>

            <div className={`helpLink d-none mb-3 `}>
              Déja inscrit? <Link to={"/"}>Se connecter</Link>
            </div>

            <div>
              <button className="btn">S'INCRIRE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
