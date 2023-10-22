import { useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"

import { useUser } from "../hooks/useUser.jsx"

const PrivateRoute = () => {

  const { isAuth } = useUser()
  console.log("test",isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return isAuth ? <Outlet /> : null;
}

export default PrivateRoute