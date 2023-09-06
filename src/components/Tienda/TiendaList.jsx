import React from 'react'
import { ItemCard } from './ItemCard'

export const TiendaList = ({productos}) => {
  return (
    <div> 
      <div className='grid grid-cols-4 gap-4'>
        {productos.length===0? <h2>CARGANDO......</h2>:productos.map((producto, indice) =>
         <ItemCard producto={producto} key={indice}/>
        )}
      </div>
    </div>
  )
}
