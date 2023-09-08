import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount'
import { MiInputButton } from '../ui/MiInputButton'
import { CartContext } from '../../context/CartContext'
// import { CartContext } from '../context/CartContext'

export const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1)
  const { agregar } = useContext(CartContext)
  //const { agregar } = useContext(CartContext)

  return (
    <div className='text-center bg-slate-300 p-2 rounded-xl'>
      <h2 className='text-2xl font-bold text-red-600'>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} className='w-96 mx-auto' />
      <ul className='flex gap-x-11 gap-y-1 justify-center flex-wrap p-2'>
        {Object.entries(producto.categorias).map(([clave,valor],index)=><li key={index} className='capitalize bg-slate-200 p-2 rounded-xl'>
          <span className='font-bold'>{clave}:</span>
          <span className='capitalize mx-2'>{valor}</span> </li>)}
      </ul>
      <p className='px-28'>{producto.descripcion}</p>
      <p className='text-xl font-bold'>S/.{producto.precio}</p>
      <ItemCount stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad} />
      <br />
      {/* <button className='button' onClick={() => agregar(producto, cantidad)} >Agregar</button> */}
      <MiInputButton type={"button"} value={"Agregar"} myStyles={'w-40'} onClick={() => agregar(producto, cantidad)}/>
    </div>
  )
}
