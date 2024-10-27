import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import { PencilFill, PhoneFill, TagFill } from "react-bootstrap-icons"
import Header from "../Header/Header"
import { addProduct } from "../../firebase/firebaseConfig"
import { toast } from "react-toastify"
import { useUserContext } from "../../contexts/UserContext/UserContext"

const Sell = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { currentUser } = useUserContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" })

  const onSubmit = async ({ image, ...productData }) => {
    try {
      setLoading(true) // Démarrer le chargement
      const uid = currentUser.uid // Remplace par l'UID de l'utilisateur actuel
      await addProduct(uid, productData, image[0]) // Ajoute le produit

      toast.success("Produit ajouté avec succès !") // Notification de succès
      reset()
    } catch (error) {
      setError(error.message)
      toast.error("Erreur lors de l'ajout du produit : " + error.message) // Notification d'erreur
    } finally {
      setLoading(false) // Arrêter le chargement
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page="vendre" />
      <div className="container flex-grow-1" style={{ paddingTop: "100px" }}>
        <h3 className="text-center text-success">Formulaire de Vente</h3>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label" htmlFor="nom">
                  Nom du Produit
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <TagFill size={18} color="#13405a" />
                  </span>
                  <input
                    type="text"
                    id="nom"
                    {...register("nom", {
                      required: "Le nom du produit est requis",
                      minLength: {
                        value: 3,
                        message: "Le nom doit contenir au moins 3 caractères",
                      },
                      maxLength: {
                        value: 50,
                        message: "Le nom ne peut pas dépasser 50 caractères",
                      },
                    })}
                    className={`form-control border-success shadow-none ${
                      errors.nom ? "is-invalid" : ""
                    }`}
                    placeholder="Nom du produit ici..."
                  />
                </div>
                {errors.nom && (
                  <p className="text-danger">{errors.nom.message}</p>
                )}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label" htmlFor="prix">
                  Prix du Produit
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <PencilFill size={18} color="#13405a" />
                  </span>
                  <input
                    type="number"
                    id="prix"
                    {...register("prix", {
                      required: "Le prix est requis",
                      min: {
                        value: 1,
                        message: "Le prix doit être supérieur à 0",
                      },
                    })}
                    className={`form-control border-success shadow-none ${
                      errors.prix ? "is-invalid" : ""
                    }`}
                    placeholder="Prix du produit ici..."
                  />
                </div>
                {errors.prix && (
                  <p className="text-danger">{errors.prix.message}</p>
                )}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label" htmlFor="category">
                  Catégories
                </label>
                <select
                  className={`form-select border-success shadow-none ${
                    errors.category ? "is-invalid" : ""
                  }`}
                  name="category"
                  id="category"
                  {...register("category", {
                    required: "Sélectionnez une catégorie",
                  })}
                >
                  <option value="" disabled>
                    Choisissez une catégorie
                  </option>
                  <option value="vetements">Vêtements</option>
                  <option value="chaussures">Chaussures</option>
                  <option value="informatiques">Informatiques</option>
                  <option value="autres">Autres</option>
                </select>
                {errors.category && (
                  <p className="text-danger">{errors.category.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="description">
                  Description du Produit
                </label>
                <textarea
                  className={`form-control border-success shadow-none ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  id="description"
                  {...register("description", {
                    required: "La description est requise",
                    minLength: {
                      value: 10,
                      message:
                        "La description doit contenir au moins 10 caractères",
                    },
                  })}
                  placeholder="Quelques descriptions ici..."
                  rows={4}
                ></textarea>
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact">
                    Contact
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <PhoneFill size={18} color="#13405a" />
                    </span>
                    <input
                      type="tel"
                      id="contact"
                      {...register("contact", {
                        required: "Le numéro de téléphone est requis",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Numéro de téléphone invalide",
                        },
                      })}
                      className={`form-control border-success shadow-none ${
                        errors.contact ? "is-invalid" : ""
                      }`}
                      placeholder="Votre numéro de téléphone..."
                    />
                  </div>
                  {errors.contact && (
                    <p className="text-danger">{errors.contact.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="province">
                    Province
                  </label>
                  <select
                    className={`form-select border-success shadow-none ${
                      errors.province ? "is-invalid" : ""
                    }`}
                    name="province"
                    id="province"
                    {...register("province", {
                      required: "Sélectionnez une province",
                    })}
                  >
                    <option value="" disabled>
                      Choisissez une province
                    </option>
                    <option value="antananarivo">Antananarivo</option>
                    <option value="tamatave">Tamatave</option>
                    <option value="majunga">Majunga</option>
                  </select>
                  {errors.province && (
                    <p className="text-danger">{errors.province.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Photo du Produit
              </label>
              <input
                type="file"
                className="form-control border-success"
                id="image"
                accept="image/png, image/jpeg, image/jpg" // Accepte uniquement les fichiers images
                {...register("image", {
                  required: "Ajoutez une image",
                  validate: {
                    isImage: (files) =>
                      files && files[0] && files[0].type.startsWith("image/")
                        ? true
                        : "Le fichier doit être une image",
                  },
                })}
              />
              {errors.image && (
                <p className="text-danger">{errors.image.message}</p>
              )}
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button
              type="submit"
              className="btn btn-success mt-3"
              disabled={loading || !isValid}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="ms-2">Chargement...</span>
                </>
              ) : (
                "VALIDER"
              )}
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-auto text-center bg-light py-3">
        <Link className="footer-link mx-3" to="">
          Politique de Vente
        </Link>
        <Link className="footer-link mx-3" to="">
          Sécurité
        </Link>
        <Link className="footer-link mx-3" to="">
          Vie Privée
        </Link>
        <Link className="footer-link mx-3" to="">
          Donations
        </Link>
      </footer>
    </div>
  )
}

export default Sell
