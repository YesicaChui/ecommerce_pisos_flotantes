
import React from 'react'
import { Link } from 'react-router-dom'
import { MiInputButton } from '../ui/MiInputButton'

export const ItemCard = ({ producto }) => {
  return (

    <div className='text-center bg-slate-300 p-2 rounded-xl'>
      <h4 className='text-2xl font-bold text-red-600'>{producto.nombre}</h4>
      <img src={producto.imagen} alt={producto.nombre} className='mx-auto rounded-lg my-3' />
      <p className='text-xl font-bold'>S/.{producto.precio}</p>
      <ul className='flex gap-x-11 gap-y-1 justify-center flex-wrap p-2'>
        {Object.values(producto.categorias).map((categoria, index) => <li key={index} className='capitalize bg-slate-200 p-2 rounded-xl'>{categoria}</li>)}
      </ul>
      <Link to={`/item/${producto.id}`}>
        <MiInputButton type={"button"} value={"Ver más"} myStyles={'w-40'} />
      </Link>
    </div>

  )
}
