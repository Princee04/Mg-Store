import { Navigate } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext/UserContext"

const PrivateRoute = ({ element }) => {
  const { currentUser } = useUserContext()

  console.log("Current User in PrivateRoute:", currentUser)

  if (!currentUser) {
    return <Navigate to="/" />
  }

  return element
}

export default PrivateRoute
