import { useEffect, useState } from "react"
import { pedirDatos } from "../services/servicesJson"

export const useProductos = ({id,type}) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    pedirDatos(id, type)
      .then((res) => {
        setProductos(res)
        
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return {productos}
}