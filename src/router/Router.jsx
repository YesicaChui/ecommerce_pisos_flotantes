import { Routes, Route, Navigate } from 'react-router-dom'
import {Login} from '../pages/Login'
import { Tienda } from '../pages/Tienda'
import { DetalleProductoPage } from '../pages/DetalleProductoPage'

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/tienda' element={<Tienda />} />
      <Route path="/item/:id" element={<DetalleProductoPage />} />
      <Route path="*" element={<Navigate to={"/tienda"} />} />
    </Routes>
  )
}

export default Router