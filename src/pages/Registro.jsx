import React, { useState } from 'react'
import { MiInput } from '../components/ui/MiInput'
import { Banner } from '../components/Banner'
import { MiInputButton } from '../components/ui/MiInputButton'
import { useUser } from '../hooks/useUser'
import { Link } from 'react-router-dom'

export const Registro = () => {
  const {register} = useUser()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = form
    await register(email,password)

  }

  return (
    <>
      <Banner text={"Registro de Clientes"} />
      <form className='bg-white w-80 mx-auto mt-8 rounded p-6' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold mb-4 text-center' >Registro</h2>
        <MiInput type={'text'} placeholder={'Nombre'} />
        <MiInput type={'email'} placeholder={'Correo'} name={"email"} onChange={handleChange} value={form?.email}/>
        <MiInput type={'password'} placeholder={'Contraseña'} name={"password"} onChange={handleChange} value={form?.password} />
        <MiInputButton type={"submit"} value={"Registro"} myStyles={'mb-1 w-full'}/>
        <Link to={"/login"}><MiInputButton type={"button"} value={"Volver"} myStyles={'bg-green-500 w-full'} /></Link>

      </form>
    </>
  )
}