import { FC } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Undefined from './Components/Undefined'

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <nav style={{display: 'flex', gap: '5px', justifyContent: 'center'}}>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<Undefined/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App