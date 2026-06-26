import React from 'react'
import cartoon from "../assets/mealBridge_cartoon.jpeg"

const Hero = () => {
  return (
    <div id='home' className='min-h-screen w-full bg-[#FBF0F4] overflow-x-hidden flex justify-between '>
        <div>
            home ab hero bna gya hai
        </div>
        <div>
            <img src={cartoon} alt="meal_cartoon" className='h-120  ' />
        </div>
        </div>
  )
}

export default Hero
