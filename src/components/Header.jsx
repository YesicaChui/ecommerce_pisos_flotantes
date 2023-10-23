import React, { useContext, useState } from 'react'
import account from '../assets/mdi_account-alert-outline.png'
import logo from '../assets/ngl.jpg'
import search from '../assets/akar-icons_search.png'
import heart from '../assets/akar-icons_heart.png'
import cart from '../assets/ant-design_shopping-cart-outlined.png'
import { Link, useNavigate } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { UserContext } from '../context/UserContext'
import { useUser } from '../hooks/useUser'

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { logout } = useUser()
  const { user, cleanUser } = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    cleanUser()
    navigate('/login')
  }
  return (
    <header className='flex justify-between pt-5 px:-1 md:px-10 items-center'>
      <div className='flex items-center gap-5'>
        <Link to={"/"}><img src={logo} alt="logo de la empresa" width={"80px"} /></Link>

      </div>
      <div className='relative md:hidden '>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className='text-2xl'
        >
          &#9776;
        </button>
        {isMenuOpen && (
          <div className='md:hidden absolute z-10 w-48 left-[-80px]'>
            <ul className='bg-white p-4 rounded-lg shadow flex flex-col gap-5 '>
              <li>
                <Link to={"/"}>Tienda</Link>
              </li>
              {user && user.rol === "admin" && (
                <li>
                  <Link to={"/"}>Administrar Productos</Link>
                </li>
              )}
              <li>
                {!user ? (
                  <Link to={"/login"}>Ingresar</Link>
                ) : (
                  <Link to={"/perfil"}>Mi Perfil</Link>
                )}
              </li>
              {user && (
                <div className="py-1">
                  <div
                    className="block px-4 py-2 text-sm hover-bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </div>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>

      <nav className='hidden md:flex justify-between gap-10 ' role="navigation">

        <Link to={"/"} className='font-bold text-2xl'>Tienda</Link>
        {user && user.rol === "admin"
          ? <>
            <Link className='font-bold text-2xl' to={"/"}>Administrar Productos</Link>
          </>
          : ""
        }
      </nav>
      <div className='flex justify-between gap-10 items-center'>
        <div className='group relative hidden md:block '>
          {!user
            ? <img src={account} alt="boton para ir a las opciones login o registro" />
            : <div className='bg-blue-500 rounded-full w-7 h-7 flex justify-center items-center font-bold text-teal-50 capitalize'>{user.firstname[0]}</div>}

          <div id="dropdownNavbar" className="z-10 hidden absolute group-hover:block  bg-white  rounded-lg shadow w-32">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" >
              {!user
                ? <>
                  <li>
                    <Link to={"/login"} className="block px-4 py-2 hover:bg-gray-100 ">Login </Link>
                  </li>
                  <li>
                    <Link to={"/registro"} className="block px-4 py-2 hover:bg-gray-100 ">Registro </Link>
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
        {user ? <img className='hidden md:block ' src={heart} alt="boton para ir a favoritos" /> : ""}

        <Link to={"/cart"}>
          {<CartWidget />}
        </Link>
      </div>
    </header>
  )
}
