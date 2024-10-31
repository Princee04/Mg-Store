import React from "react"
import { useCart } from "../../contexts/CartContext/CartContext"
import { FaTrash, FaShoppingCart, FaDollarSign } from "react-icons/fa"
import Header from "../Header/Header"

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart()

  // Calcul du total du prix
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.prix * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <>
      <Header />
      <div className="bg-light" style={{ paddingTop: "100px" }}>
        <div className="container mt-4">
          <h3 className="text-center text-success mb-4">Mon Panier</h3>

          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <FaShoppingCart size={50} className="text-muted" />
              <h5 className="mt-3">Votre panier est vide.</h5>
              <p>Ajoutez des articles pour commencer vos achats.</p>
            </div>
          ) : (
            <div>
              <div className="row">
                {cartItems.map((item) => (
                  <div key={item.id} className="col-md-4 mb-4">
                    <div className="card shadow-sm border-0 rounded">
                      <img
                        src={item.productImageURL}
                        className="card-img-top"
                        alt={item.nom}
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.nom}</h5>
                        <p className="card-text">
                          {item.prix} AR {/* Changé en AR */}
                        </p>
                        <div className="d-flex align-items-center mb-3">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center mx-2"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-outline-success"
                          data-bs-toggle="collapse"
                          data-bs-target={`#details-${item.id}`}
                        >
                          Détails
                        </button>
                        <div
                          className="collapse mt-2"
                          id={`details-${item.id}`}
                        >
                          <p>
                            <strong>Catégorie :</strong> {item.category}
                          </p>
                          <p>
                            <strong>Province :</strong> {item.province}
                          </p>
                          <p>
                            <strong>Description :</strong> {item.description}
                          </p>
                          <p>
                            <strong>Contact :</strong> {item.contact}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <p className="text-danger">
                            {(item.prix * item.quantity).toFixed(2)} AR{" "}
                            {/* Changé en AR */}
                          </p>
                          <button
                            className="btn btn-danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaTrash /> Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <h4>
                  Total : {calculateTotal()} AR {/* Changé en AR */}
                </h4>
                <button className="btn btn-outline-danger" onClick={clearCart}>
                  Vider le Panier
                </button>
              </div>
            </div>
          )}
        </div>
        <footer className="bg-light text-center py-3 mt-4">
          <p>
            © {new Date().getFullYear()} Votre Boutique En Ligne. Tous droits
            réservés.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Cart
