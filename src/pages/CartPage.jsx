import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Banner } from '../components/Banner'

import { Link } from 'react-router-dom'
import { CartViewItem } from '../components/Cart/CartViewItem'
import { MiInputButton } from '../components/ui/MiInputButton'
import { createOrder } from '../services/servicesProvider'
import { useUser } from '../hooks/useUser'

export const CartPage = () => {
  const {user} =useUser()
  const { cart, borrarDelCarrito, vaciarCarrito, totalCompra } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const pagar = () => {
    const orden = {
      cliente: {
        nombre: `${user.firstname} ${user.lastname}`,
        direccion: user.address,
        email:user.email,
      },
      items: cart,
      total: totalCompra(),
      fecha: new Date()
    }

    createOrder(orden)
      .then(res => {
        vaciarCarrito()
        setOrderId(res)
      })
      .catch(e => alert(e))
  }
  if (orderId) {
    return (
      <div>
        <h2>Tu compra se registro exitosamente</h2>
        <hr />
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/"> <MiInputButton type={'button'} value={"Volver"} myStyles={'w-40'} /></Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div>
        <h2> Mi Carrito </h2>
        <p>Carrito vacio</p>
        <Link to={"/"} >
          <MiInputButton type={'button'} value={"Ir a Comprar"} myStyles={'w-40'} />
        </Link>
      </div>
    )
  }
  return (
    <div>
      <Banner text={"Mi Carrito"}/>
      <table className='mx-auto mt-5' role="table">
        <thead>
          <tr className='border-b-2 border-[#AA5656]'  role="row">
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
            <CartViewItem producto={producto} key={index} index={index}  borrarDelCarrito={borrarDelCarrito} />
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
