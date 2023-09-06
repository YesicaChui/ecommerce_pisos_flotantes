import { useEffect, useState } from "react"
import { pedirDatos } from "../services/services"

export const useProductos = ({id,idDetail}) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    pedirDatos()
      .then((res) => {
        console.log(res)
        console.log(idDetail)
        if(idDetail){
          setProductos(res.find(prod=>prod.id===Number(idDetail)))
        }else{
          id?setProductos(res.filter(prod=>prod.category===id)):setProductos(res)
        }
        
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id,idDetail])

  return {productos}
}