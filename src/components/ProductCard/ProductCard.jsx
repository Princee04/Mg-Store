// src/components/ProductCard/ProductCard.jsx

import React from "react"
import { Card, Button } from "react-bootstrap"
import { Heart, Eye } from "react-bootstrap-icons"

const ProductCard = ({ product }) => {
  return (
    <Card
      className="mb-3 shadow-sm border-0"
      style={{ borderRadius: "8px", overflow: "hidden" }}
    >
      <Card.Img
        variant="top"
        src={product.productImageURL}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{product.nom}</Card.Title>
        <Card.Text>
          <strong>Prix:</strong> AR{product.prix}
        </Card.Text>
        <Card.Text>
          <strong>Province:</strong> {product.province}
        </Card.Text>
        <Card.Text
          className="text-muted"
          style={{ maxHeight: "50px", overflow: "hidden" }}
        >
          <strong>Description:</strong> {product.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-primary" className="me-2">
            <Eye className="me-1" /> Voir
          </Button>
          <Button variant="outline-secondary">
            <Heart className="me-1" /> Sauvegarder
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
