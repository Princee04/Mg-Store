import React, { useState } from "react"
import Header from "../Header/Header"
import Caroussel from "../Caroussel/Caroussel"
import ListGroup from "react-bootstrap/ListGroup"
import "bootstrap/dist/css/bootstrap.min.css"
import Product from "../Product/Product"
import { FaSearch } from "react-icons/fa"
import HashLoader from "react-spinners/HashLoader"

const CSSProperties = {
  display: "block",
  margin: "50px auto",
  borderColor: "red",
}

const Articles = ({ currentUser, signOut }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      <Header page="articles" currentUser={currentUser} signOut={signOut} />
      <div className="caroussel-container">
        <Caroussel />
      </div>

      <div className="container mt-4">
        <h3 className="text-center text-success mb-4">Listes Des Articles</h3>
        <div className="row mb-3">
          <div className="col-md-5">
            <ListGroup horizontal>
              <ListGroup.Item id="active-filtre">Tout</ListGroup.Item>
              <ListGroup.Item>Vêtements</ListGroup.Item>
              <ListGroup.Item>Chaussures</ListGroup.Item>
              <ListGroup.Item>Informatique</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Trouver un article spécifique ici..."
            />
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <button className="btn btn-success">
              <FaSearch />
            </button>
          </div>
        </div>

        {isLoading ? (
          <HashLoader
            color={"#38ab4d"}
            loading={isLoading}
            cssOverride={CSSProperties}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="container p-4 d-flex flex-wrap gap-3">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        )}

        {!isLoading && (
          <div className="container text-center">
            <button className="btn btn-success">Plus</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles
