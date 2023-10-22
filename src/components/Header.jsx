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
        <div className='group relative'>
          <img src={account} alt="" />
          <div id="dropdownNavbar" className="z-10 hidden absolute group-hover:block font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
              <li>
                <Link to={"/login"} className="block px-4 py-2 hover:bg-gray-100 ">Ingresar </Link>
              </li>
              <li>
                <Link to={"/registro"} className="block px-4 py-2 hover:bg-gray-100 ">Registrarse </Link>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Mi Perfil</a>
              </li>
            </ul>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Cerrar Sesion</a>
            </div>
          </div>
        </div>
        <img src={heart} alt="" />
        <Link to={"/cart"}>
          {<CartWidget />}
        </Link>
      </div>
    </header>
  )
}
