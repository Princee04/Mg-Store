import React from "react"
import { FaMobile, FaArrowAltCircleRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <div className="intro-container text-center mb-5">
      <h1>Madagascar Store</h1>
      <h2 className="text-muted">Plateforme de vente Malagasy</h2>
      <div className="text-container my-4">
        <p className="lead">
          Découvrez notre application révolutionnaire de vente en ligne,
          disponible aussi bien sur mobile que sur web. Parcourez notre vaste
          catalogue et trouvez tout ce dont vous avez besoin, du confort de
          votre téléphone ou de votre ordinateur. Grâce à une interface
          intuitive, naviguez facilement entre les catégories, explorez des
          produits variés et faites vos achats en toute simplicité. Notre
          plateforme vous offre une expérience de shopping fluide et sécurisée,
          où chaque article est à portée de clic. Simplifiez votre vie avec
          notre application, votre nouvel allié pour des achats pratiques et
          efficaces, où que vous soyez.
        </p>
      </div>
      <div className="btns-container">
        <Link className="test me-2" to="/articles">
          <button id="start" className="start-btn btn btn-primary">
            Commencer <FaArrowAltCircleRight className="arrow" />
          </button>
        </Link>
        <Link className="test2" to="/telechargements">
          <button className="start-btn btn btn-secondary">
            Sur Mobile <FaMobile />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
