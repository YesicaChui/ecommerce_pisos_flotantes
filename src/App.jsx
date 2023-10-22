
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { LayoutBase } from './layouts/LayoutBase'
import Router from './router/Router'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <LayoutBase>
            <Router />
          </LayoutBase>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  )
}

export default App
