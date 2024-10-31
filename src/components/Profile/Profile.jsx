import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useUserContext } from "../../contexts/UserContext/UserContext"
import {
  fetchUserProducts,
  getUserProfile,
  updateProfileImage,
} from "../../firebase/firebaseConfig"
import { Link } from "react-router-dom"
import { Phone, Camera } from "react-bootstrap-icons" // Ajout de l'icône Camera
import Header from "../Header/Header"
import ProductCard from "../ProductCard/ProductCard"

const Profile = () => {
  const { currentUser, setCurrentUser } = useUserContext()
  const [userProducts, setUserProducts] = useState([])

  useEffect(() => {
    const getUserProducts = async () => {
      if (currentUser) {
        const products = await fetchUserProducts(currentUser.uid)
        setUserProducts(products)
      }
    }
    getUserProducts()
  }, [currentUser])

  // Fonction pour gérer le changement d'image
  const handleImageChange = async (event) => {
    const file = event.target.files[0]
    if (file) {
      // Uploader la nouvelle image et obtenir l'URL
      const profileImageURL = await updateProfileImage(currentUser.uid, file)

      // Mettre à jour l'utilisateur directement sans faire un reload
      const updatedUser = {
        ...currentUser,
        profileURL: profileImageURL, // Met à jour l'URL de l'image de profil
      }
      setCurrentUser(updatedUser)
    }
  }

  return (
    <>
      <Header />
      <Container className="mt-5" style={{ paddingTop: "50px" }}>
        <Row className="mb-4 text-center">
          <Col>
            <h1 className="fw-bold">{currentUser.pseudo}</h1>
            <p className="text-muted">
              <Phone className="me-2" />
              {currentUser.phone || "Non renseigné"}
            </p>
            <Link to="/sells">
              <Button variant="primary" className="mb-3">
                Publier un nouveau produit
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="text-center shadow-sm mb-4 border-0">
              <div className="d-flex justify-content-center mb-3">
                <label
                  htmlFor="profile-image-upload"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={currentUser.profileURL || "default-profile.png"}
                    className="rounded-circle"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <Camera
                    className="position-absolute"
                    style={{
                      bottom: "5px",
                      right: "5px",
                      color: "white",
                      fontSize: "24px",
                    }}
                  />
                </label>
                <input
                  type="file"
                  id="profile-image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }} // Cacher l'input
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">
                  {currentUser.pseudo}
                </Card.Title>
                <Card.Text>
                  <strong>Téléphone:</strong>{" "}
                  {currentUser.phone || "Non renseigné"}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h4 className="fw-bold">Mes Produits</h4>
            <Row>
              {userProducts.length > 0 ? (
                userProducts.map((product) => (
                  <Col key={product.uid} sm={6} md={4}>
                    <ProductCard product={product} />
                  </Col>
                ))
              ) : (
                <p>Aucun produit trouvé.</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
