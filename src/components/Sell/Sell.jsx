import React from "react"
import Header from "../Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

const Sell = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header page="vendres" />
      <div className="container mt-5 flex-grow-1">
        <h3 className="text-center text-success">Formulaire de Vente</h3>
        <div className="mt-5">
          <form>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label" htmlFor="nom">
                  Nom du Produit
                </label>
                <input
                  type="text"
                  id="nom"
                  className="form-control border-success"
                  placeholder="nom du produit ici..."
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label" htmlFor="prix">
                  Prix du Produit
                </label>
                <input
                  type="number"
                  id="prix"
                  className="form-control border-success"
                  placeholder="prix du produit ici..."
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label" htmlFor="category">
                  Catégories
                </label>
                <select className="form-select" name="category" id="category">
                  <option value="" disabled selected>
                    Choisissez une catégorie
                  </option>
                  <option value="vetements">Vêtements</option>
                  <option value="chaussures">Chaussures</option>
                  <option value="informatiques">Informatiques</option>
                  <option value="autres">Autres</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="description">
                  Description du Produit
                </label>
                <textarea
                  className="form-control border-success"
                  id="description"
                  placeholder="quelques descriptions ici..."
                  rows={4}
                ></textarea>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact">
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="form-control border-success"
                    placeholder="votre numéro de téléphone..."
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="province">
                    Province
                  </label>
                  <select className="form-select" name="province" id="province">
                    <option value="" disabled selected>
                      Choisissez une province
                    </option>
                    <option value="antananarivo">Antananarivo</option>
                    <option value="tamatave">Tamatave</option>
                    <option value="majunga">Majunga</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Photo du Produit
              </label>
              <input type="file" className="form-control" id="image" />
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Valider
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
