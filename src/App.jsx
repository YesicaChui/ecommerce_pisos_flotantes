import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { LayoutBase } from './layouts/LayoutBase'
import Router from './router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <LayoutBase>
          <Router/>
        </LayoutBase>
      </BrowserRouter>
    </>
  )
}

export default App
