import React from 'react'
import cartoon from "../assets/mealBridge_cartoon.jpeg"
import { useNavigate } from 'react-router'


const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen w-full bg-[#FBF0F4] overflow-x-hidden'>
        <div id='home' className=' pt-5  flex justify-between '>
            <div className='flex  flex-col gap-7 pl-30 pt-6'>
                <div className='w-fit px-5 py-2 rounded-full bg-[#D3E3C9] text-green-700 font-semibold text-sm shadow-sm'>Share Food. Share Hope.</div>
                <div className='font-black text-8xl font-sans '>Donate Food. <br /><span className='text-green-800'>Nourish</span> Lives.</div>
                <div className='text-gray-800 font-medium'>MealBridge connects generous donorswith people in need. <br />Together, we can reduce food waste and bring smiles.</div>
                <div className='flex gap-4'>

                    <button onClick={() => navigate("/Donate-food")} className='flex items-center gap-2 px-6 py-3 rounded-xl bg-green-700 text-white font-semibold shadow-md hover:bg-green-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-90 '>
                        Donate Food
                        <i className="ri-hand-heart-line text-lg"></i>
                    </button>

                    <button onClick={() => navigate("/Find-food")} className='flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-700 text-green-700 font-semibold cursor-pointer  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-90'>
                        Find Food
                        <i className="ri-search-line text-lg"></i>
                    </button>

                </div>
                <div className='text-green-800 font-medium'><i className="ri-shield-check-fill"></i> Safe, Simple, Transparent.</div>
                
            </div>
            <div>
                <img src={cartoon} alt="meal_cartoon" className='h-130 pt-8 ' />
                
            </div>
        </div>
        {/* -------------------------------------data-------------------------------------------- */}
        <div className="h-40 bg-pink-100 shadow-md z-50 mx-20 rounded-4xl flex items-center">
  <div className="w-full flex items-center justify-between px-15">

                <div className='flex gap-3 border-r pr-30 border-gray-300 ' >
                    <i className="ri-hand-heart-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300  "></i>
                    <h1 className='text-green-800' ><span className='text-2xl font-extrabold text-black'>1,250+</span>  <br />Happy Donors</h1>                   
                </div>


                <div className='flex gap-3 border-r pr-30 border-gray-300'>
                    <i className="ri-team-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300  "></i>
                    <h1 className='text-green-800' ><span className='text-2xl font-extrabold text-black'>3,800+</span>  <br />Meals Donated</h1>                   

                </div>

                <div className='flex gap-3 border-r pr-30 border-gray-300' >
                    <i className="ri-heart-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300 "></i>
                    <h1 className='text-green-800' ><span className='text-2xl font-extrabold text-black'>2,500+</span>  <br />People Helped</h1>                   
                </div>

                <div className='flex gap-3'>
                    <i className="ri-leaf-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300 "></i>
                    <h1 className='text-green-800' ><span className='text-2xl font-extrabold text-black'>1.2 Ton+</span>  <br />Food Saved</h1>                   

                </div>
            </div>
        </div>
        </div>

    )
}

export default Hero
