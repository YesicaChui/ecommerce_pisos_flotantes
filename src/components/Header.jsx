import React from 'react'
import account from '../assets/mdi_account-alert-outline.png'
import search from '../assets/akar-icons_search.png'
import heart from '../assets/akar-icons_heart.png'
import cart from '../assets/ant-design_shopping-cart-outlined.png'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Header = () => {
  return (
    <header className='flex justify-between pt-5 px-10 items-center'>
      <h1>Ecommerce</h1>
      <nav className='flex justify-between gap-10'>
      <Link to={"/"}>Inicio</Link>
        <Link to={"/"}>Tienda</Link>
        <Link to={"/"}>Acerca De</Link>
        <Link to={"/"}>Contacto</Link>
      </nav>
      <div  className='flex justify-between gap-10 items-center'>
        <img src={search} alt="" />
        <img src={heart} alt="" />
        <Link to={"/cart"}>
          {<CartWidget />}
        </Link>
        <Link to={"/login"}> <img src={account} alt="" /></Link>
      </div>
    </header>
  )
}
