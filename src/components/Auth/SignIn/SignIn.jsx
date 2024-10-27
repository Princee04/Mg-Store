import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import {
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  KeyFill,
} from "react-bootstrap-icons"
import {
  loginWithEmailPassword,
  getUserProfile,
} from "../../../firebase/firebaseConfig"
import "./SignIn.css"
import "../Auth.css"
import { ReactTyped } from "react-typed"
import { useUserContext } from "../../../contexts/UserContext/UserContext"

const SignIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { setCurrentUser, fetchUsers } = useUserContext()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" })

  const onSubmit = async ({ email, password }) => {
    setError("")
    setLoading(true)

    try {
      const userCredential = await loginWithEmailPassword(email, password)
      const userProfile = await getUserProfile(userCredential.user.uid)
      setCurrentUser(userProfile) // Mettre à jour currentUser avec le profil
      await fetchUsers() // Mettre à jour la liste des utilisateurs après connexion
      console.log("Utilisateur connecté:", userProfile)
      navigate("/home") // Redirection vers la page d'accueil
    } catch (err) {
      setError("Échec de la connexion : " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="Auth">
      <div className="rounded-4 shadow SignIn">
        <div className="p-4 left">
          <h2 className="mb-4 fw-bold">Connexion</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <EnvelopeFill size={18} color="#13405a" />
                </span>
                <input
                  type="email"
                  {...register("email", {
                    required: "L'adresse email est requise",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Adresse email invalide",
                    },
                  })}
                  className={`form-control shadow-none ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Adresse mail"
                />
              </div>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <KeyFill size={18} color="#13405a" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Le mot de passe est requis",
                    minLength: {
                      value: 6,
                      message:
                        "Le mot de passe doit contenir au moins 6 caractères",
                    },
                  })}
                  className={`form-control shadow-none ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Mot de passe"
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeSlashFill size={18} color="#13405a" />
                  ) : (
                    <EyeFill size={18} color="#13405a" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            {error && <p className="text-danger">{error}</p>}

            <Link to={"/forgetpassword"} className="nav-link mb-3">
              Mot de passe oublié?
            </Link>

            <div className={`helpLink d-none mb-3`}>
              Pas encore de compte? <Link to={"/signup"}>S'inscrire</Link>
            </div>

            <button
              type="submit"
              className="btn"
              disabled={loading || !isValid}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="ms-2">Connexion</span>
                </>
              ) : (
                "SE CONNECTER"
              )}
            </button>
          </form>
        </div>

        <div className="right p-4">
          <h2 className="fw-bold">MG-Store</h2>
          <img
            src="../../../../ispm.jpeg"
            className="ispm"
            alt="MG-Store Logo"
          />
          <div className="typedText my-3">
            <ReactTyped
              className="text-center"
              strings={[
                "Bonjour si vous n'avez pas encore de compte, veuillez vous inscrire !!!",
              ]}
              typeSpeed={50}
              backSpeed={10}
              loop
            />
          </div>
          <button className="btn">
            <Link to="/signup" className="nav-link">
              S'inscrire
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
