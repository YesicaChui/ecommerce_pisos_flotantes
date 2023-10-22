import React from 'react'
import { ItemCard } from './ItemCard'

export const TiendaList = ({productos}) => {
  return (
    <div> 
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {productos.length===0? <h2>CARGANDO......</h2>:productos.map((producto, indice) =>
         <ItemCard producto={producto} key={indice}/>
        )}
      </div>
    </div>
  )
}
