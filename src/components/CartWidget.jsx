import { useContext } from 'react'
import cartImage from '../assets/ant-design_shopping-cart-outlined.png'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {
  const { cantidadCompra } = useContext(CartContext)

  return (
    <div className='flex relative' aria-label="Carrito de compras">
      <img src={cartImage} alt="icono del carrito de compras" className='w-8' />
      <div className='bg-red-500 rounded-full p-1 text-white font-bold flex items-center justify-center w-5 h-5 absolute top-[-10px] right-[-12px]'>
        <p>{cantidadCompra()}</p>
      </div>
    </div>
  )
}
