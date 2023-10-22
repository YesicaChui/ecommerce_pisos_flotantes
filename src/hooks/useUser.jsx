import { useNavigate } from "react-router-dom"
import { signIn, signUp,signOut } from "../services/servicesProvider"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
export const useUser = () => {
  const { storeUser,cleanUser } = useContext(UserContext)
  const navigate = useNavigate()
  const login = async (email, password) => {
    try {
      const miuser=await signIn( email, password)
      storeUser(miuser)
      navigate('/')
    } catch (e) {
      console.log("ocurrio un error:", e)
    }
  }
  const register = async (form) => {
    try {
      const miuser=await signUp(form)
      storeUser(miuser)
      navigate('/')
    } catch (e) {
      console.log("ocurrio un error:", e)
    }
  }

  const logout = async () => {
    try{
      await signOut()
      cleanUser()
      navigate('/login')
    }catch(e){
      console.log("ocurrio un error:",e)     
    }
  }
  return {
    login,
    logout,
    register
  }
}