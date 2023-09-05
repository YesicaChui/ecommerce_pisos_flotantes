import React from 'react'
import { MiInput } from '../components/MiInput'

export const Login = () => {
  return (
    <form className='bg-white w-80 mx-auto mt-8 rounded p-6'>
      <h2 className='text-2xl font-bold mb-4 text-center' >Login</h2>
      <input type='text' className='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1' placeholder='Nombre'/>
      <input type='email' className='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1' placeholder='Correo'/>
      <input type='password' className='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1' placeholder='Contraseña'/>
      <MiInput/>
      <input type="submit" value="Ingresar" className='bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer mb-1' />
      <input type="button" value="Registarse" className='bg-green-500 w-full py-2 text-white rounded-md cursor-pointer' />
    </form>
  )
}

