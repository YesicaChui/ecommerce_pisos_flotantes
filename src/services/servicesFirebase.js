import { collection, doc, documentId, getDoc, getDocs, query, where, writeBatch,addDoc } from "firebase/firestore";
import { db } from "./configFirebase";


export const pedirDatos = (id, type) => {

  if (type === 'getOne') {
    return new Promise((resolve, reject) => {
      const productoRef = doc(db, "productos", id)
      getDoc(productoRef)
        .then(res => {
          const respuesta = {
            id: res.id,
            ...res.data()
          }
          resolve(respuesta)
        })

    })
  } else  return new Promise((resolve, reject) => {
      const productosRef = collection(db, "productos")
      const consulta = id
        ? query(productosRef, where("category", "==", id))
        : productosRef
      getDocs(consulta)
        .then(res => {
          const docs = res.docs
          const respuesta = docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          resolve(respuesta)
        })
    })


}

