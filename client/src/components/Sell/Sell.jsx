import React from "react";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sell.css";
import { Link } from "react-router-dom";

const Sell = ({ currentUser }) => {
  return (
    <div>
      <Header page="vendres" currentUser={currentUser} />
      <div className="container mt-5">
        <h3 className="text-center text-success">Formulaire de Vente</h3>
        <div className="form-container mt-5">
          <form>
            <div className="row">
              <div className="col-3">
                <label className="form-label " htmlFor="nom">
                  Nom du Produit
                </label>
                <input
                  type="text"
                  id="nom"
                  className="form-control"
                  placeholder="nom du produit ici..."
                />
              </div>
              <div className="col-3">
                <label className="form-label " htmlFor="prix">
                  Prix du Produit
                </label>
                <input
                  type="number"
                  id="prix"
                  className="form-control"
                  placeholder="nom du produit ici..."
                />
              </div>
              <div className="col-6">
                <label className="form-label " htmlFor="category">
                  Categories
                </label>
                <select className="form-select" name="category" id="category">
                  <option selected value="">
                    Vetements
                  </option>
                  <option value="">Chaussures</option>
                  <option value="">Informatiques</option>
                  <option value="">Autres</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-5">
                <label className="form-label" htmlFor="description">
                  Description du Produit
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="description"
                  placeholder="quelques description ici.."
                ></textarea>
              </div>
              <div className="col-6">
                <div className="row">
                  <label className="form-label" htmlFor="contact">
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="form-control"
                    placeholder="votre numéro de téléphone..."
                  />
                </div>
                <div className="row mt-3">
                  <label className="form-label" htmlFor="province">
                    Province
                  </label>
                  <select className="form-select" name="province" id="province">
                    <option selected value="">
                      Antananarivo
                    </option>
                    <option value="">Tamatave</option>
                    <option value="">Majunga</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <label htmlFor="image" className="form-label">
                  Photo du Produit
                </label>
                <input type="file" className="form-control" id="image" />
              </div>
              <div className="visualisation-image"></div>
              <button className="form-control btn btn-success mt-5">
                Valider
              </button>
            </div>
          </form>
        </div>
        <footer className="sell-footer">
          <Link className="footer-link" to="">
            Politique de Vente
          </Link>
          <Link className="footer-link" to="">
            Securité
          </Link>
          <Link className="footer-link" to="">
            Vie Privée
          </Link>
          <Link className="footer-link" to="">
            Donations
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Sell;
