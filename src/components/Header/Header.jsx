import xxx from "/xxx.png"
import { FaShoppingCart } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext/UserContext"
import { useCart } from "../../contexts/CartContext/CartContext" // Importez le contexte du panier
import { useState } from "react"
import { logout } from "../../firebase/firebaseConfig"
import PopUp from "../PopUp/PopUp"

import styles from "./Header.module.css" // Import du module CSS

const Header = () => {
  const { currentUser } = useUserContext()
  const { cartCount } = useCart() // Utilisez le cartCount du contexte du panier
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false)
  const location = useLocation()

  const handleLogoutClick = () => {
    setShowLogoutPopUp(true)
  }

  const confirmLogout = async () => {
    await logout()
    setShowLogoutPopUp(false)
  }

  const denyLogout = () => {
    setShowLogoutPopUp(false)
  }

  const handleBlogClick = (e) => {
    e.preventDefault() // Empêche la redirection
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm py-1">
        <div className="container-fluid">
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link
                  className={`nav-link ${styles.navLink} ${
                    location.pathname === "/home" ? styles.activeLink : ""
                  }`}
                  to="/home"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className={`nav-link ${styles.navLink} ${
                    location.pathname === "/articles" ? styles.activeLink : ""
                  }`}
                  to="/articles"
                >
                  Articles
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className={`nav-link ${styles.navLink} ${
                    location.pathname === "/sells" ? styles.activeLink : ""
                  }`}
                  to="/sells"
                >
                  Ventes
                </Link>
              </li>
              {/* <li className="nav-item me-3">
                <Link
                  className={`nav-link ${styles.navLink} ${
                    location.pathname === "/blog" ? styles.activeLink : ""
                  } disabled-link`} // Classe CSS pour le style désactivé
                  to="/blog"
                  onClick={handleBlogClick} // Gestionnaire de clic pour empêcher la redirection
                >
                  Blog
                </Link>
              </li> */}
            </ul>

            <div className="d-flex align-items-center">
              <Link className="position-relative me-3" to="/cart">
                <FaShoppingCart className="shoppingCart fs-4 text-secondary" />
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{
                      fontSize: "0.75rem",
                      padding: "5px 8px",
                      lineHeight: "1",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
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
                    <Link className="dropdown-item" to={"/profil"}>
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
