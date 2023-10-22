import MOCK_DATA from '../data/mock_data.json' assert {type:'json'}

import { db } from './configFirebase.js'

import { collection,addDoc } from 'firebase/firestore'

const productoRef = collection(db, "productos")

MOCK_DATA.products.forEach(item=>{

  delete item.id

  addDoc(productoRef,item)

})

console.log(MOCK_DATA)