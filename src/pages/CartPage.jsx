import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

import { Link } from 'react-router-dom'
import { CartViewItem } from '../components/Cart/CartViewItem'
import { MiInputButton } from '../components/ui/MiInputButton'

export const CartPage = () => {
  const { cart, borrarDelCarrito, vaciarCarrito, totalCompra } = useContext(CartContext)
  const pagar = () => {
    alert("Gracias Por Su Compra")
    vaciarCarrito()
  }



  if (cart.length === 0) {
    return (
      <div>
        <h2> Mi Carrito </h2>
        <p>Carrito vacio</p>
        <Link to={"/"} >
          <MiInputButton type={'button'} value={"Ir a Comprar"} />
        </Link>
      </div>
    )
  }
  return (
    <div>
      <h2> Mi Carrito </h2>
      <table className='mx-auto'>
        <thead>
          <tr className='border-b-2 border-[#AA5656]'>
            <th>Nº</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>precio Ud.</th>
            <th>Precio Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((producto, index) => (
            <CartViewItem producto={producto} index={index} borrarDelCarrito={borrarDelCarrito} />
          ))}
          <tr className='border-b border-[#AA5656] mt-5' >
            <td></td>
            <td> </td>
            <td></td>
            <td></td>
            <td className='font-bold text-l'>TOTAL</td>
            <td className='font-bold text-xl'>S/. {totalCompra().toFixed(2)}</td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-center gap-2 mt-5'>
        <MiInputButton type={'button'} onClick={vaciarCarrito} value={"Vaciar Carrito"} myStyles={'w-40'} />
        <MiInputButton type={'button'} onClick={pagar} value={"Pagar"} myStyles={'w-40'} />
      </div>
    </div>

  )
}
