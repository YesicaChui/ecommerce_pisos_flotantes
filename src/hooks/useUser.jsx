import { useNavigate } from "react-router-dom"
import { signIn, signUp,signOut,updateUser } from "../services/servicesProvider"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
export const useUser = () => {
  const {user, storeUser,cleanUser } = useContext(UserContext)
  const navigate = useNavigate()
  const isAuth = Boolean(user?.email)
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
  const saveUser = async(data)=>{
    try{
      console.log(data, user.id)
      await updateUser(data,user.id)
      storeUser({
        ...user,
        ...data
      })
    }catch(error){
      console.log("Ocurrió un error:", error);
      throw error;
    }
  }
  return {
    login,
    logout,
    register,
    user,
    saveUser,
    isAuth,
  }
}