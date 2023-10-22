import { useNavigate } from "react-router-dom"
import { auth } from "../services/configFirebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
export const useUser = () => {
  const navigate = useNavigate()
  const login = async (email, password) => {
    try{
      const credentialsUser = await signInWithEmailAndPassword(auth, email, password)
      const user = credentialsUser.user;
      console.log("los credenciales user son:", user)
      console.log("los credenciales son:", credentialsUser)  
      navigate('/')
    }catch(e){
      console.log("ocurrio un error:",e)
    }
  }
  const register = async (email, password) => {
    try{
      const credentialsUser = await createUserWithEmailAndPassword(auth, email, password)
      const user = credentialsUser.user;
      console.log("los credenciales user son:", user)
      console.log("los credenciales son:", credentialsUser)   
      navigate('/')
    }catch(e){
      console.log("ocurrio un error:",e)
    }
  }

  const logout = async () => {
    await auth.signOut()

    navigate('/login')
  }
  return {
    login,
    logout,
    register
  }
}