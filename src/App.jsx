import React from 'react'
import {Routes,  Route } from "react-router"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Auth from './pages/auth/Auth'
import DonorHome from './pages/donor/DonorHome'
import RecipientHome from './pages/recipient/RecipientHome'
import Unauthorized from './pages/Unauthorized'
import ProtectedRoute from './routes/ProtectedRoute'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/Donate-food' element={
          <ProtectedRoute allowedRoles={["donor"]}>
            <DonorHome />
          </ProtectedRoute>
        } />
        <Route path='/Find-food' element={
          <ProtectedRoute allowedRoles={["recipient"]}>
            <RecipientHome />
          </ProtectedRoute>
        } />
        <Route path='/unauthorized' element={<Unauthorized />} />
        


        

      </Routes>
    </div>
  )
}

export default App
