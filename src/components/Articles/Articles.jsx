import React, { useEffect, useState } from "react"
import Header from "../Header/Header"
import Caroussel from "../Caroussel/Caroussel"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaShoppingCart, FaInfoCircle, FaSearch } from "react-icons/fa"
import HashLoader from "react-spinners/HashLoader"
import { getAllProducts } from "../../firebase/firebaseConfig"
import { useCart } from "../../contexts/CartContext/CartContext"

const CSSProperties = {
  display: "block",
  margin: "50px auto",
  borderColor: "red",
}

const Articles = () => {
  const { addToCart } = useCart()
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [expandedProduct, setExpandedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("Tout")

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const productsFromFirebase = await getAllProducts()
      setProducts(productsFromFirebase)
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  const toggleDetails = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId)
  }

  const filterProducts = () => {
    return products.filter((product) => {
      const matchesSearch = product.nom
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesFilter =
        selectedFilter.toLowerCase() === "tout" ||
        product.category.toLowerCase() === `${selectedFilter.toLowerCase()}`
      return matchesSearch && matchesFilter
    })
  }

  const filteredProducts = filterProducts()

  return (
    <div className="bg-light">
      <Header page="articles" />

      <div className="container mt-4">
        <Caroussel />

        <h3 className="text-center text-success mb-4 mt-5">
          Listes Des Articles
        </h3>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-5 mb-2">
            <ListGroup horizontal className="d-flex justify-content-center">
              {["Tout", "Vêtements", "Chaussures", "Informatiques"].map(
                (filter) => (
                  <ListGroup.Item
                    key={filter}
                    className={`filter-item text-center mx-1 py-2 px-4 rounded ${
                      selectedFilter === filter ? "active" : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      transition: "0.3s",
                      fontWeight: "bold",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter}
                  </ListGroup.Item>
                )
              )}
            </ListGroup>
          </div>
          <div className="ms-5 col-md-6 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Trouver un article spécifique ici..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: "50px",
                padding: "10px 20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <button className="btn btn-success rounded-circle p-2">
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
          <div className="container p-4 d-flex flex-wrap justify-content-center gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="product-card"
                  style={{
                    width: "20rem",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={product.productImageURL}
                    alt={product.nom}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="mb-3">{product.nom}</Card.Title>
                    <Card.Text className="text-muted">
                      <strong>Prix :</strong> {product.prix} AR
                    </Card.Text>
                    <div className="d-flex justify-content-around mt-4">
                      <Button
                        variant="outline-success"
                        className="px-3"
                        onClick={() => toggleDetails(product.id)}
                      >
                        <FaInfoCircle /> Détails
                      </Button>
                      <Button
                        variant="success"
                        className="px-3"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart /> Ajouter au panier
                      </Button>
                    </div>

                    {expandedProduct === product.id && (
                      <div className="mt-3">
                        <p>
                          <strong>Catégorie :</strong> {product.category}
                        </p>
                        <p>
                          <strong>Province :</strong> {product.province}
                        </p>
                        <p>
                          <strong>Description :</strong> {product.description}
                        </p>
                        <p>
                          <strong>Contact :</strong> {product.contact}
                        </p>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p className="text-center">Aucun produit disponible</p>
            )}
          </div>
        )}

        {!isLoading && filteredProducts.length > 0 && (
          <div className="container text-center mt-4">
            <button className="btn btn-outline-success px-5 py-2 rounded-pill">
              Voir plus
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles
