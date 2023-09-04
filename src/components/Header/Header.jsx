import React from 'react'
import account from '../../assets/mdi_account-alert-outline.png'
import search from '../../assets/akar-icons_search.png'
import heart from '../../assets/akar-icons_heart.png'
import cart from '../../assets/ant-design_shopping-cart-outlined.png'

export const Header = () => {
  return (
    <header className='flex justify-between pt-5 px-10 items-center'>
      <h1>Ecommerce</h1>
      <nav className='flex justify-between gap-10'>
        <div>Inicio</div>
        <div>Comprar</div>
        <div>Acerca De</div>
        <div>Contacto</div>
      </nav>
      <div  className='flex justify-between gap-10 items-center'>
        <img src={account} alt="" />
        <img src={search} alt="" />
        <img src={heart} alt="" />
        <img src={cart} alt="" />
      </div>
    </header>
  )
}
