import React from 'react'
import { MiInputButton } from './ui/MiInputButton'

export const ItemCount = ({ stock, cantidad, setCantidad }) => {

  const aumentar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }
  const disminuir = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (
    <div>
      <div className='flex justify-center gap-3 mt-2 text-lg items-center'>
        <MiInputButton type={'button'} value={"-"} onClick={disminuir} myStyles={'w-10 bg-[#B99B6B]'}/>
            <span className='font-bold text-2xl'>{cantidad}</span>
        <MiInputButton type={'button'} value={"+"} onClick={aumentar} myStyles={'w-10 bg-[#B99B6B]'}/>
      </div>
      
    </div>
  )
}