import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from './components/Header'
import { Banner } from './components/Banner'
import { Login } from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>      
      <Header/>
      <Banner/>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
