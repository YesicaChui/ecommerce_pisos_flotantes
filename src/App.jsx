import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Header} from './components/Header/Header'
import { Banner } from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>      
      <Header/>
      <Banner/>
    </BrowserRouter>
    </>
  )
}

export default App
