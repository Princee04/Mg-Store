import React from "react"
import Header from "../Header/Header"
import Body from "../Body/Body"
import Wave from "../Wave/Wave"
import { useUserContext } from "../../contexts/UserContext/UserContext"

const Home = () => {
  const { currentUser } = useUserContext()

  return (
    <div className="container-fluid">
      <Header page="home" currentUser={currentUser} />
      <div className="py-5">
        {currentUser ? (
          <Body />
        ) : (
          <div className="alert alert-warning" role="alert">
            Veuillez vous connecter pour accéder au contenu.
          </div>
        )}
      </div>
      <Wave />
    </div>
  )
}

export default Home
