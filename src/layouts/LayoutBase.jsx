import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export const LayoutBase = ({children}) => {
  return (
    <>    
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
