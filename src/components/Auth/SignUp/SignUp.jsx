import { useRef, useState } from "react"
import "./SignUp.css"
import "../Auth.css"
import {
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  FileImageFill,
  KeyFill,
  PersonFill,
  TelephoneFill, // Nouvelle icône pour le téléphone
} from "react-bootstrap-icons"
import { ReactTyped } from "react-typed"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createUser } from "../../../firebase/firebaseConfig"
import { toast } from "react-toastify"
import { useUserContext } from "../../../contexts/UserContext/UserContext"

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { fetchUsers } = useUserContext()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = async (data) => {
    const { pseudo, email, password, phone, file } = data
    setError("")
    setLoading(true)

    try {
      await createUser(email, password, { pseudo, phone }, file[0])
      fetchUsers()
      navigate("/")
      toast.success(
        "Inscription réussie, vous pouvez maintenant vous connecter !"
      )
      reset()
    } catch (err) {
      setError("Erreur lors de l'inscription : " + err.message)
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="Auth">
      <div className="rounded-4 shadow SignUp">
        <div className="left p-4">
          <h2 className="fw-bold">MG-Store</h2>
          <img src="../../../../ispm.jpeg" className="ispm" alt="Logo" />
          <div className="typedText my-3">
            <ReactTyped
              className={`text-center`}
              strings={[
                "Si vous avez déjà un compte, vous <br /> pouvez vous connecter",
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && <p className="text-danger">{error}</p>}
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <PersonFill size={18} color="#13405a" />
                </span>
                <input
                  type="text"
                  className={`form-control shadow-none ${
                    errors.pseudo ? "is-invalid" : ""
                  }`}
                  placeholder="Pseudo"
                  {...register("pseudo", {
                    required: "Ce champ est requis",
                    minLength: {
                      value: 3,
                      message: "Le pseudo doit contenir au moins 3 caractères",
                    },
                    validate: {
                      noSpecialChars: (value) => {
                        const regex = /^[a-zA-Z0-9_]*$/
                        return (
                          regex.test(value) ||
                          "Le pseudo ne doit contenir que des lettres, des chiffres ou des underscores"
                        )
                      },
                    },
                  })}
                />
              </div>
              {errors.pseudo && (
                <p className="text-danger">{errors.pseudo.message}</p>
              )}
            </div>
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <TelephoneFill size={18} color="#13405a" />
                </span>
                <input
                  type="text"
                  className={`form-control shadow-none ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  placeholder="Numéro de téléphone"
                  {...register("phone", {
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Numéro de téléphone invalide",
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
              )}
            </div>
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <EnvelopeFill size={18} color="#13405a" />
                </span>
                <input
                  type="email"
                  className={`form-control shadow-none ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Adresse mail"
                  {...register("email", {
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Adresse mail invalide",
                    },
                  })}
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
                  className={`form-control shadow-none ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Mot(s) de passe"
                  {...register("password", {
                    required: "Ce champ est requis",
                    minLength: {
                      value: 6,
                      message:
                        "Le mot de passe doit contenir au moins 6 caractères",
                    },
                  })}
                />
                <span
                  className="input-group-text"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
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
            <div className="form-group mb-3">
              <div className="input-group">
                <input
                  type="file"
                  className="form-control shadow-none"
                  {...register("file", {
                    required: "Veuillez sélectionner un fichier",
                    validate: {
                      isImage: (fileList) => {
                        const file = fileList[0]
                        if (!file) return true
                        const allowedTypes = [
                          "image/jpeg",
                          "image/png",
                          "image/gif",
                          "image/jpg",
                        ]
                        return (
                          allowedTypes.includes(file.type) ||
                          "Le fichier doit être une image (jpeg, png, gif)"
                        )
                      },
                    },
                  })}
                />
                <span className="input-group-text">
                  <FileImageFill size={18} color="#13405a" />
                </span>
              </div>
              {errors.file && (
                <p className="text-danger">{errors.file.message}</p>
              )}
            </div>
            <div className={`helpLink d-none mb-3`}>
              Déjà inscrit? <Link to={"/"}>Se connecter</Link>
            </div>
            <div>
              <button className="btn" disabled={!isValid || loading}>
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    &nbsp; INSCRIPTION
                  </>
                ) : (
                  "INSCRIPTION"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
