import React from 'react'
import {Routes,  Route } from "react-router"
import Home from './pages/auth/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
    </div>
  )
}

export default App
