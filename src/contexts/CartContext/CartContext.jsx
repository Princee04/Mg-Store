// src/contexts/CartContext/CartContext.js

import React, { createContext, useContext, useState, useEffect } from "react"

// Création du contexte du panier
const CartContext = createContext()

// Fonction pour récupérer le panier à partir de localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cartItems")
  return storedCart ? JSON.parse(storedCart) : []
}

// Fournisseur de contexte pour le panier
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage())

  // Mise à jour de localStorage lorsque le panier change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  // Fonction pour retirer un article du panier
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // Fonction pour mettre à jour la quantité d'un article
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  // Fonction pour vider le panier
  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cartItems") // Enlever les articles de localStorage
  }

  // Calcul du nombre total d'articles dans le panier
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Valeur fournie à tous les composants enfants
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => useContext(CartContext)
