import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth" // Pas besoin de getFirestore ici
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore" // Assurez-vous que getFirestore est importé ici
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

// Configuration Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

// Initialisation de Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

// Fonction de connexion
export const loginWithEmailPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

// Fonction de création d'utilisateur
export const createUser = async (email, password, userData, file) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  // Upload de l'image et obtention de l'URL
  let profileURL = ""
  if (file) {
    profileURL = await uploadImage(file)
  }

  // Ajoute l'utilisateur à Firestore avec l'URL de l'image
  const user = userCredential.user
  const userRef = doc(db, "users", user.uid) // Crée la référence utilisateur
  await setDoc(userRef, {
    ...userData,
    uid: user.uid,
    profileURL,
  })

  return user
}

// Fonction de déconnexion
export const logout = async () => {
  await signOut(auth)
}

// Fonction pour récupérer tous les utilisateurs
// Fonction pour récupérer tous les utilisateurs
export const getAllUsers = async () => {
  const usersCollection = collection(db, "users")
  const userSnapshot = await getDocs(usersCollection)
  const userList = userSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return userList
}

// Fonction pour uploader une image dans Firebase Storage
export const uploadImage = async (file) => {
  if (!file) return null // Vérifie si le fichier est présent

  const storageRef = ref(storage, `profileImages/${file.name}`)
  await uploadBytes(storageRef, file)

  // Récupère l'URL de téléchargement
  const url = await getDownloadURL(storageRef)
  return url
}

// Réinitialiser le mot de passe
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
}

import { getDoc } from "firebase/firestore" // Assurez-vous d'importer cette fonction

// ...autres imports et initialisation

// Fonction pour récupérer les données de l'utilisateur par UID
export const getUserProfile = async (uid) => {
  const userDoc = doc(db, "users", uid)
  const userSnapshot = await getDoc(userDoc)

  if (userSnapshot.exists()) {
    return userSnapshot.data() // Retourne les données de l'utilisateur
  } else {
    throw new Error("Aucun utilisateur trouvé !")
  }
}

export default app
