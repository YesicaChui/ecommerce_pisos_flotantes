import { useNavigate } from "react-router-dom"
import { signIn, signUp,signOut } from "../services/servicesProvider"
export const useUser = () => {
  const navigate = useNavigate()
  const login = async (email, password) => {
    try {
      await signIn( email, password)
      navigate('/')
    } catch (e) {
      console.log("ocurrio un error:", e)
    }
  }
  const register = async (email, password) => {
    try {
      await signUp( email, password)
      navigate('/')
    } catch (e) {
      console.log("ocurrio un error:", e)
    }
  }

  const logout = async () => {
    try{
      await signOut()
      navigate('/login')
    }catch(e){
      console.log("ocurrio un error:",e)
      throw e;
    }
  }
  return {
    login,
    logout,
    register
  }
}