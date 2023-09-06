import React from 'react'
import { Header } from '../components/Header'


export const LayoutBase = ({children}) => {
  return (
    <>    
    <Header/>
    {children}
    </>
  )
}
