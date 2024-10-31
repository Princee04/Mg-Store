import React, { createContext, useContext, useState, useEffect } from "react"
import { getAllUsers, getUserProfile } from "../../firebase/firebaseConfig"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const UserContext = createContext()

// Provider du contexte utilisateur
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser")
    return savedUser ? JSON.parse(savedUser) : null
  })

  // Récupérer tous les utilisateurs
  const fetchUsers = async () => {
    try {
      const usersData = await getAllUsers()
      setUsers(usersData)
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error)
    }
  }

  // Mettre à jour l'utilisateur actuel et le stocker dans localStorage
  const updateCurrentUser = (user) => {
    setCurrentUser(user)
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
    } else {
      localStorage.removeItem("currentUser")
    }
  }

  // Surveille l'état d'authentification
  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Récupère des données utilisateur depuis Firestore
          const additionalUserInfo = await getUserProfile(user.uid)
          const userData = {
            uid: user.uid,
            profileURL: additionalUserInfo.profileURL || user.photoURL || null,
            pseudo: additionalUserInfo.pseudo || user.displayName || null,
            phone: additionalUserInfo.phone || null, // Ajout du numéro de téléphone
          }

          updateCurrentUser(userData)
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des données utilisateur:",
            error
          )
        }
      } else {
        updateCurrentUser(null)
      }
    })

    // Nettoyage de l'abonnement
    return () => unsubscribe()
  }, [])

  // Récupérer tous les utilisateurs au démarrage
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        setCurrentUser: updateCurrentUser,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// Hook personnalisé pour utiliser le contexte utilisateur
export const useUserContext = () => useContext(UserContext)
