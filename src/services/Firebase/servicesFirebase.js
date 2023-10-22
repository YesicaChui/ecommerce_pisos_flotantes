import { collection, doc, documentId, getDoc, getDocs, query, where, writeBatch,addDoc } from "firebase/firestore";
import { db } from "./configFirebase";
import { auth } from "./configFirebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"

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

export const signIn=async (email,password)=>{
  try{
    const credentialsUser = await signInWithEmailAndPassword(auth, email, password)
    const user = credentialsUser.user;
    console.log("los credenciales user son:", user)
    console.log("los credenciales son:", credentialsUser) 
    return user
  }catch(e){
    console.log("ocurrio un error firebase:",e)
    throw e;
  }
}
export const signUp=async (email,password)=>{
  try{
    const credentialsUser = await createUserWithEmailAndPassword(auth, email, password)
    const user = credentialsUser.user;
    console.log("los credenciales user son:", user)
    console.log("los credenciales son:", credentialsUser) 
    return user
  }catch(e){
    console.log("ocurrio un error firebase:",e)
    throw e;
  }
}
export const signOut=async ()=>{
  try{
    await auth.signOut()
  }catch(e){
    console.log("ocurrio un error firebase:",e)
    throw e;
  }
}