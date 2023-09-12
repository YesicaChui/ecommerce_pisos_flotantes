import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductos } from '../hooks/useProductos'
import { ItemDetail } from '../components/DetalleProducto/ItemDetail'

export const DetalleProductoPage = () => {
  const {id} =useParams()
  console.log(`mi id es ${id}`)
  const {productos} =useProductos({id,type: "getOne"})
  return (
    <main className='p-5'> 
      {productos.length===0? <h2>CARGANDO......</h2>:<ItemDetail producto={productos} />}
    </main>
  )
}