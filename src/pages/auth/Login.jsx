import React, { useState } from 'react'

const Login = ({setToggle}) => {
    const [showpassword , setShowpassword] = useState(false)
  return (
    <div>

      <form className='w-full max-w-md bg-green-50 p-8 rounded-3xl shadow-2xl border border-green-100 flex flex-col gap-4' action="">

        <h1 className='text-3xl font-bold text-center text-green-700 mb-2'>
          LOGIN HERE
        </h1>

        <p className='text-center text-gray-500 mb-4'>
          Welcome back to MealBridge 🌱
        </p>

        <input
          className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition'
          type="text"
          placeholder='Enter your email'
        />


        <div className="relative w-full">
  <input
    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
    type={showpassword? "text" : "password"}
    placeholder="Enter your password"
  />

  <i onClick={()=>setShowpassword(!showpassword)} className="ri-eye-close-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-xl active:scale-90"></i>
</div>

        <button
          className='w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 mt-2'
        >
          Login
        </button>

        <p className='text-center text-gray-500 text-sm mt-2'>
          Don't have an account?
          <span onClick={()=>setToggle(false)} className='text-green-600 font-semibold cursor-pointer ml-1 hover:underline'>
            Register
          </span>
        </p>

      </form>

    </div>
  )
}

export default Login