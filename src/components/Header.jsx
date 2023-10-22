import React, { useContext } from 'react'
import account from '../assets/mdi_account-alert-outline.png'
import search from '../assets/akar-icons_search.png'
import heart from '../assets/akar-icons_heart.png'
import cart from '../assets/ant-design_shopping-cart-outlined.png'
import { Link, useNavigate } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { UserContext } from '../context/UserContext'
import { useUser } from '../hooks/useUser'

export const Header = () => {
  const { logout } = useUser()
  const { user, cleanUser } = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    cleanUser()
    navigate('/login')
  }
  return (
    <header className='flex justify-between pt-5 px-10 items-center'>
      <h1>Ecommerce</h1>
      <nav className='flex justify-between gap-10'>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/"}>Tienda</Link>
        {user && user.rol === "admin"
          ? <>
            <Link to={"/"}>Administrar Productos</Link>
          </>
          : ""
        }
      </nav>
      <div className='flex justify-between gap-10 items-center'>
        <img src={search} alt="" />
        <div className='group relative'>
          {!user
            ? <img src={account} alt="" />
            : <div className='bg-blue-500 rounded-full w-7 h-7 flex justify-center items-center font-bold text-teal-50 capitalize'>{user.firstname[0]}</div>}

          <div id="dropdownNavbar" className="z-10 hidden absolute group-hover:block  bg-white  rounded-lg shadow w-32">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" >
              {!user
                ? <>
                  <li>
                    <Link to={"/login"} className="block px-4 py-2 hover:bg-gray-100 ">Ingresar </Link>
                  </li>
                  <li>
                    <Link to={"/registro"} className="block px-4 py-2 hover:bg-gray-100 ">Registrarse </Link>
                  </li>
                </>
                : <>
                  <li>
                    <Link to={"/perfil"} className="block px-4 py-2 hover:bg-gray-100 ">Mi Perfil </Link>
                  </li>
                  <div className="py-1 ">
                    <div className="block px-4 py-2 text-sm  hover:bg-gray-100 cursor-pointer" onClick={handleLogout} >Cerrar Sesion</div>
                  </div>
                </>
              }
            </ul>
          </div>
        </div>
        {user ? <img src={heart} alt="" /> : ""}
        <Link to={"/cart"}>
          {<CartWidget />}
        </Link>
      </div>
    </header>
  )
}
