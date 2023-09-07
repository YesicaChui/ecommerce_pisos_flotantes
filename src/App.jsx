import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { LayoutBase } from './layouts/LayoutBase'
import Router from './router/Router'
import { CartProvider } from './context/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
     <BrowserRouter>
        <LayoutBase>
          <Router/>
        </LayoutBase>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
