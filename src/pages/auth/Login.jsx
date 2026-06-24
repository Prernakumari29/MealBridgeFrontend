import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginApi } from '../../services/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/authSlice';

const Login = ({ setToggle }) => {
  const [showpassword, setShowpassword] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch()

  const submit = async(data) =>{
    try {
      const response = await loginApi(data);

      const user = response.data.data;
      dispatch(setUser(user))
      
      console.log(response.data)
      alert(response.data.message)
      reset();
    } catch (error) {
      alert(error.response?.data?.message || "something went Wrong")
      console.log("error in login api" , error)
    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit(submit)} className='w-full max-w-md bg-green-50 p-8 rounded-3xl shadow-2xl border border-green-100 flex flex-col gap-4' action="">

        <h1 className='text-3xl font-bold text-center text-green-700 mb-2'>
          LOGIN HERE
        </h1>

        <p className='text-center text-gray-500 mb-4'>
          Welcome back to MealBridge 🌱
        </p>

{/* -----------------------------------------------------email-------------------------------------------------- */}
        <input
          className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition'
          type="text"
          placeholder='Enter your email'
          {...register("email", { required: "email is required" })}
        />
        {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}


{/* -----------------------------------------------------password-------------------------------------------------- */}

        <div className="relative w-full">
          <input
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            type={showpassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", { required: "password is required" })}
          />

          <i onClick={() => setShowpassword(!showpassword)} className="ri-eye-close-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-xl active:scale-90"></i>
        </div>
        {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}

{/* -----------------------------------------------------login button-------------------------------------------------- */}

        <button
          className='w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 mt-2'
        >
          Login
        </button>

        <p className='text-center text-gray-500 text-sm mt-2'>
          Don't have an account?
          <span onClick={() => setToggle(false)} className='text-green-600 font-semibold cursor-pointer ml-1 hover:underline'>
            Register
          </span>
        </p>

      </form>

    </div>
  )
}

export default Login