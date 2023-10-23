import { collection, doc, documentId, getDoc, getDocs, query, where, writeBatch,addDoc,updateDoc} from "firebase/firestore";
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
  try {
    console.log("tester1")
    await signInWithEmailAndPassword(auth, email, password)
    console.log("tester2")
    //recuperando datos de la base de datos
    const userRef = collection(db, "users")
    const consulta = query(userRef, where("email", "==", email))

    const data = await getDocs(consulta)
    if (!data.empty) {
      // La consulta tiene resultados, toma el primer documento encontrado (si esperas uno)
      const docSnap = data.docs[0];

      // Combina el ID del documento con los datos
      const userData = {
        id: docSnap.id,
        ...docSnap.data()
      };

      console.log('Datos del documento:', userData);
      return userData
    } else {
      console.log('No se encontraron documentos con ese correo.');
      throw 'No se encontraron documentos con ese correo.'
    }

  }catch(e){
    console.log("ocurrio un error firebase:",e)
    throw new Error("Ocurrió un error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.");
  }
}
export const signUp=async (form)=>{
  try {
    const {email,password} =form
    const credentialsUser = await createUserWithEmailAndPassword(auth, email, password)
    const user = credentialsUser.user;
    delete form.password;
    const newUser = {
      uid: user.uid,
      rol:"user",
      ...form      
    }
    //guardando en la base de datos
    const reference = collection(db, 'users')
    const response = await addDoc(reference, newUser)
    console.log("los credenciales user son:", user)
    console.log(user.email, user.uid)
    return {
      id: response.id,
      ...newUser      
    }
  } catch(e){
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
export const updateUser = async (data, id) => {
  try {
    await updateDoc(doc(db, "users", id), data);
    return true
  } catch (e) {
    console.log("ocurrio un error firebase actualizando:", e)
    throw e;
  }
}
