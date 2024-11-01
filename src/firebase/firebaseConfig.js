import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth"
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore"
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
    profileURL = await uploadImage(file, "profileImages")
  }

  // Ajoute l'utilisateur à Firestore avec l'URL de l'image, l'email et le numéro de téléphone
  const user = userCredential.user
  const userRef = doc(db, "users", user.uid)
  await setDoc(userRef, {
    ...userData,
    uid: user.uid,
    profileURL,
    email,
    phone: userData.phone, // Ajout du numéro de téléphone ici
  })

  console.log("Utilisateur créé :", {
    ...userData,
    uid: user.uid,
    profileURL,
    email,
    phone: userData.phone,
  })
  return user
}

// Fonction de déconnexion
export const logout = async () => {
  await signOut(auth)
}

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
export const uploadImage = async (file, folderName) => {
  if (!file) return null

  const storageRef = ref(storage, `${folderName}/${file.name}`)
  await uploadBytes(storageRef, file)

  const url = await getDownloadURL(storageRef)
  return url
}

// Réinitialiser le mot de passe
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
}

// Fonction pour récupérer les données de l'utilisateur par UID
export const getUserProfile = async (uid) => {
  const userDoc = doc(db, "users", uid)
  const userSnapshot = await getDoc(userDoc)

  if (userSnapshot.exists()) {
    return userSnapshot.data()
  } else {
    throw new Error("Aucun utilisateur trouvé !")
  }
}

// Fonction pour ajouter un produit
export const addProduct = async (uid, productData, file) => {
  try {
    const productImageURL = await uploadImage(file, "products")
    const productRef = doc(collection(db, "products"))

    await setDoc(productRef, {
      ...productData,
      productImageURL,
      uid,
    })

    console.log("Produit ajouté avec succès:", productData)
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error)
  }
}

// Fonction pour récupérer les produits d'un utilisateur
export const fetchUserProducts = async (uid) => {
  try {
    const q = query(collection(db, "products"), where("uid", "==", uid))
    const querySnapshot = await getDocs(q)
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return products
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des produits de l'utilisateur :",
      error
    )
    throw error
  }
}

// Fonction pour mettre à jour l'image de profil
export const updateProfileImage = async (uid, file) => {
  if (!file) return null

  try {
    // Uploader la nouvelle image
    const profileImageURL = await uploadImage(file, "profileImages")

    // Met à jour le document de l'utilisateur dans Firestore
    const userRef = doc(db, "users", uid)
    await setDoc(userRef, { profileURL: profileImageURL }, { merge: true })

    console.log("Image de profil mise à jour avec succès :", profileImageURL)
    return profileImageURL
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'image de profil:", error)
    throw error
  }
}

// Fonction pour récupérer tous les produits
export const getAllProducts = async () => {
  try {
    const productsCollection = collection(db, "products")
    const productsSnapshot = await getDocs(productsCollection)
    const productsList = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return productsList
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error)
    return []
  }
}

export default app
