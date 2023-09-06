
import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({ producto }) => {
  return (

    <div className='card' >
      <h4>{producto.nombre}</h4>
      <img src={producto.imagen} alt={producto.nombre} className='img__card' />
      <p>{producto.descripcion}</p>
      <p>S/.{producto.precio}</p>
      <Link to={`/item/${producto.id}`} className='button'>Ver mas </Link>
    </div>

  )
}
