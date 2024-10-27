import xxx from "/xxx.png"
import { FaShoppingCart } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext/UserContext"
import { useState } from "react"
import { logout } from "../../firebase/firebaseConfig"
import PopUp from "../PopUp/PopUp"

import "./Header.css"

const Header = () => {
  const { currentUser } = useUserContext()
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false)
  const location = useLocation() // pour déterminer le lien actif

  // Fonction pour afficher le pop-up de confirmation
  const handleLogoutClick = () => {
    setShowLogoutPopUp(true)
  }

  // Fonction pour confirmer la déconnexion
  const confirmLogout = async () => {
    await logout()
    setShowLogoutPopUp(false)
    // Redirection ou autres actions après la déconnexion, si nécessaire
  }

  // Fonction pour annuler la déconnexion
  const denyLogout = () => {
    setShowLogoutPopUp(false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm py-1">
        {" "}
        {/* Réduit le padding ici */}
        <div className="container-fluid">
          {/* Logo et titre du site */}
          <Link className="navbar-brand d-flex align-items-center" to="/home">
            <img
              className="logo-img"
              width={80}
              height={80}
              src={xxx}
              alt="Logo"
            />
            <h3 className="ms-2">MG-Store</h3>
          </Link>

          {/* Bouton de navigation pour les petits écrans */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                {" "}
                {/* Augmentation de l'espace entre les liens */}
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active-link" : ""
                  }`}
                  to="/home"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item me-3">
                {" "}
                {/* Augmentation de l'espace entre les liens */}
                <Link
                  className={`nav-link ${
                    location.pathname === "/articles" ? "active-link" : ""
                  }`}
                  to="/articles"
                >
                  Articles
                </Link>
              </li>
              <li className="nav-item me-3">
                {" "}
                {/* Augmentation de l'espace entre les liens */}
                <Link
                  className={`nav-link ${
                    location.pathname === "/sells" ? "active-link" : ""
                  }`}
                  to="/sells"
                >
                  Ventes
                </Link>
              </li>
              <li className="nav-item me-3">
                {" "}
                {/* Augmentation de l'espace entre les liens */}
                <Link
                  className={`nav-link ${
                    location.pathname === "/blog" ? "active-link" : ""
                  }`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Icône de panier et profil utilisateur */}
            <div className="d-flex align-items-center">
              <Link className="me-3" to="/panier">
                <FaShoppingCart className="shoppingCart" />
              </Link>
              <div className="dropdown">
                <img
                  src={currentUser.profileURL}
                  alt="Profil"
                  className="rounded-circle border border-secondary"
                  width={40}
                  height={40}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li>
                    <Link className="dropdown-item" to="">
                      Profil
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogoutClick}
                    >
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Pop-up de confirmation de déconnexion */}
      {showLogoutPopUp && (
        <PopUp
          title="Confirmer la déconnexion"
          confirm={confirmLogout}
          denied={denyLogout}
        >
          Es-tu sûr de vouloir te déconnecter ?
        </PopUp>
      )}
    </>
  )
}

export default Header
