import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {
    const[toggle , setToggle] = useState(true)
  return (
    <div className='min-h-screen w-full bg-green-200 flex items-center justify-center'>
      {
        toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />
      }
    </div>
  )
}

export default Auth
