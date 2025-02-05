import xxx from "/xxx.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ page, currentUser, signOut }) => {
  return (
    <div className="header-container">
      <div className="logo">
        <img className="logo-img" width={100} height={100} src={xxx} alt="" />
        <h3 className="logo-title"> MG-Store </h3>
      </div>
      <div className="link">
        <Link
          id={page == "home" ? "active" : ""}
          style={{ textDecoration: "none", color: "#13405a" }}
          to="/home"
        >
          Acceuil
        </Link>
        <Link
          id={page == "articles" ? "active" : ""}
          style={{ textDecoration: "none", color: "#13405a" }}
          to="/articles"
        >
          Articles
        </Link>
        <Link
          id={page == "vendres" ? "active" : ""}
          style={{ textDecoration: "none", color: "#13405a" }}
          to="/vendres"
        >
          Ventes
        </Link>
        <Link
          id={page == "blog" ? "active" : ""}
          style={{ textDecoration: "none", color: "#13405a" }}
          to=""
        >
          Blog
        </Link>
      </div>
      <div className="profil-parameters">
        <div className="shop">
          <Link to="/panier">
            <FaShoppingCart
              className="shoppingCart"
              fill={page == "panier" ? "green" : "grey"}
            />
          </Link>
        </div>
        <div className="profil-container">
          <img src={`../../../uploads/${currentUser.avatar}`} alt="" />
        </div>
        <div className="menu">
          <div className="un">
            <Link className="un" to="">
              Profil
            </Link>
          </div>
          <div className="deux">
            <Link
              className="deux"
              to=""
              onClick={() => signOut(currentUser.ID)}
            >
              Déconnexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
