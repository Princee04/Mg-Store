import xxx from "/xxx.png"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext/UserContext"

const Header = () => {
  const { currentUser } = useUserContext()

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
                    <button className="dropdown-item" to="">
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
