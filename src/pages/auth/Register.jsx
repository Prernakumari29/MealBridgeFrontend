import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Register = ({ setToggle }) => {

    const [showpassword, setShowpassword] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submit = (data) => {
        alert("registered succesfully")
        console.log(data)
        reset();
    }


    return (

        <div >
            <form onSubmit={handleSubmit(submit)} className='w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-green-100 flex flex-col gap-4' action="">

                <h1 className='text-3xl font-bold text-center text-green-700 mb-1'>
                    REGISTER HERE
                </h1>

                <p className='text-center text-gray-500 mb-2'>
                    Join MealBridge and make an impact 🌱
                </p>

{/* --------------------------------------------------------name-------------------------------------------- */}
                <input
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition'
                    type="text"
                    placeholder='Enter your name*'
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}

{/* --------------------------------------------------------email-------------------------------------------- */}

                <input
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition'
                    type="email"
                    placeholder='Enter your email*'
                    {...register("email", { required: "email is required" })}
                />
                {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}


{/* --------------------------------------------------------password-------------------------------------------- */}

                <div className="relative w-full">
                    <input
                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                        type={showpassword ? "text" : "password"}
                        placeholder="Enter your password*"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.password?.type === "minLength" && (<p className="text-red-500 text-sm">min length should be 6</p>)}
                    {errors.password?.type === "required" && (<p className="text-red-500 text-sm">password id required</p>)}

                    <i onClick={() => setShowpassword(!showpassword)} className="ri-eye-close-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-xl active:scale-90"></i>
                </div>


{/* --------------------------------------------------------mobile-------------------------------------------- */}

                <input
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition'
                    type="text"
                    placeholder='Enter your mobile number*'
                    {...register("mobile", { required: "password is required" })}
                />
                {errors.mobile && (<p className="text-red-500 text-sm">{errors.mobile.message}</p>)}

{/* --------------------------------------------------------role-------------------------------------------- */}

                <select
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition text-gray-600'
                    {...register("role" , {required:"please select a role"})}
                >
                    <option value="">Select your role*</option>
                    <option value="donor">Donor</option>
                    <option value="recipient">Recipient</option>
                </select>
                {errors.role && (<p className="text-red-500 text-sm">{errors.role.message}</p>)}

{/* --------------------------------------------------------register button-------------------------------------------- */}

                <button
                    className='w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300'
                >
                    Register
                </button>

                <p className='text-center text-gray-500 text-sm mt-2'>
                    Already have an account?
                    <span onClick={() => setToggle(true)} className='text-green-600 font-semibold cursor-pointer ml-1 hover:underline'>
                        Login
                    </span>
                </p>

            </form>
        </div>
    )
}

export default Register
