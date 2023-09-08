import React, { useContext } from 'react'

import { ItemCount } from '../ItemCount'
import { CartContext } from '../../context/CartContext'

export const CartViewItem = ({ producto, index, borrarDelCarrito }) => {

  const { updateCart } = useContext(CartContext)

  const setCantidad = (cantidad) => {
    console.log(cantidad)
    updateCart(producto.id, cantidad)
  }

  return (
    <tr className='border-b border-[#AA5656] mt-5' key={producto.id} >
      <td>{index + 1}</td>
      <td> <img src={producto.imagen} alt={producto.nombre} className='rounded-lg' width={'100px'} /></td>
      <td>{producto.nombre}</td>
      <td> <ItemCount cantidad={producto.cantidad} stock={producto.stock} setCantidad={setCantidad} /></td>
      <td>S/. {producto.precio}</td>
      <td>S/. {(producto.cantidad * producto.precio).toFixed(2)}</td>
      <td>
        <button className='p-2' onClick={() => borrarDelCarrito(producto.id)}>🗑️</button>
      </td>
    </tr>
  )
}
