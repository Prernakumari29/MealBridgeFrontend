import React from 'react'
import {Routes,  Route } from "react-router"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Auth from './pages/auth/Auth'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />

        

      </Routes>
    </div>
  )
}

export default App
