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

export const createOrder=(order)=>{
  return new Promise(async(resolve,reject)=>{

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where(documentId(), "in", order.items.map(item => item.id)))

    const productos = await getDocs(q)
    const outOfStock = []

    productos.docs.forEach((doc) => {
      const item = order.items.find(prod => prod.id === doc.id)
      const stock = doc.data().stock
      if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad
        })
      } else {
        outOfStock.push(item)
      }
    })
    if(outOfStock.length===0){
      await batch.commit()
      const doc = await addDoc(ordersRef, order)
      resolve(doc.id)
      // vaciarCarrito()
      // setOrderId(doc.id)
    }else{
      reject("Hay items sin stock")
    }
  })
}