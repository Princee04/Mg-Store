import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { EnvelopeFill } from "react-bootstrap-icons"
import { Spinner } from "react-bootstrap" // Assurez-vous d'avoir importé le composant Spinner
import { resetPassword } from "../../firebase/firebaseConfig"

const ForgetPassword = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false) // État pour gérer le chargement
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Validation en temps réel
  })

  const onSubmit = async (data) => {
    const { email } = data
    setError("")
    setLoading(true) // Démarrer le chargement

    try {
      await resetPassword(email) // Remplacez par votre fonction d'envoi d'e-mail
      toast.success(
        `Vérifiez votre e-mail ${email} pour réinitialiser votre mot de passe`
      )
      setTimeout(() => navigate("/"), 3000)
    } catch (err) {
      setError("Erreur lors de l'envoi de l'e-mail : " + err.message)
    } finally {
      setLoading(false) // Arrêter le chargement
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">
                Réinitialiser le Mot de Passe
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                  <label className="form-label">Adresse mail</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <EnvelopeFill size={18} color="#13405a" />
                    </span>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Entrez votre adresse mail"
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
                    <div className="invalid-feedback d-block">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                  disabled={!isValid || loading} // Désactiver le bouton si le formulaire n'est pas valide ou si le chargement est en cours
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />
                      Chargement...
                    </>
                  ) : (
                    "ENVOYER"
                  )}
                </button>
              </form>

              <div className="text-center mt-3">
                Vous vous souvenez de votre mot de passe?{" "}
                <Link to={"/"}>Se connecter</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
