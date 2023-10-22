import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Tienda } from '../pages/Tienda'
import { DetalleProductoPage } from '../pages/DetalleProductoPage'
import { CartPage } from '../pages/CartPage'
import { Registro } from '../pages/Registro'
import { Perfil } from '../pages/Perfil'
import PrivateRoute from './PrivateRoute'

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/cart' element={<CartPage />} />
        <Route path='/perfil' element={<Perfil />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/tienda' element={<Tienda />} />
      <Route path="/item/:id" element={<DetalleProductoPage />} />
      <Route path="*" element={<Navigate to={"/tienda"} />} />
    </Routes>
  )
}

export default Router