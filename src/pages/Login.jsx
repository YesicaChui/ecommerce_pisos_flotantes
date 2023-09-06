import React from 'react'
import { MiInput } from '../components/ui/MiInput'
import { Banner } from '../components/Banner'
import { MiInputButton } from '../components/ui/MiInputButton'

export const Login = () => {
  return (
    <>
      <Banner />
      <form className='bg-white w-80 mx-auto mt-8 rounded p-6'>
        <h2 className='text-2xl font-bold mb-4 text-center' >Login</h2>
        <MiInput type={'text'} placeholder={'Nombre'} />
        <MiInput type={'email'} placeholder={'Correo'} />
        <MiInput type={'password'} placeholder={'Contraseña'} />
        <MiInputButton type={"submit"} value={"Ingresar"} myStyles={'mb-1'} />
        <MiInputButton type={"button"} value={"Registarse"} myStyles={'bg-green-500'} />
      </form>
    </>
  )
}

