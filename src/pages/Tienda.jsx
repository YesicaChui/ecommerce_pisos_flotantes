import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductos } from '../hooks/useProductos'
import { TiendaList } from '../components/Tienda/TiendaList'

export const Tienda = () => {
  const {id} = useParams()
  console.log(id)
  const {productos} = useProductos({id,type: "getAll"})
  return (
    <main className='p-5'> 
      <TiendaList productos={productos}/>

    </main>
  )
}
