import xxx from "/xxx.png"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext/UserContext"
import { useState } from "react"
import { logout } from "../../firebase/firebaseConfig"
import PopUp from "../PopUp/PopUp"

const Header = () => {
  const { currentUser } = useUserContext()
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false)

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/home">
            <img
              className="logo-img"
              width={100}
              height={100}
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
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sells">
                  Ventes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Blog
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link className="me-3" to="/panier">
                <FaShoppingCart className="shoppingCart" />
              </Link>
              <div className="dropdown">
                <img
                  src={currentUser.profileURL}
                  alt="Profil"
                  className="rounded-circle"
                  width={40}
                  height={40}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="">
                      Profil
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogoutClick} // Appelle le pop-up de confirmation
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
