import React from 'react'
import AboutImage from "../assets/MealBridge_About.png"

const About = () => {
  return (
    <div id='about' className='min-h-screen w-full bg-[#FBE5F1]'>
            <div className='flex justify-between'>
                
                <div className='pt-15'>
                    <img src={AboutImage} alt="" className='h-150' />
                </div>

{/* -----------------------------------------------right side----------------------------------------------- */}

                <div className='flex flex-col gap-10 pt-20 pr-30  text-center items-center'>

{/* -----------------------top most */}
                <div className='w-fit px-5 py-2 rounded-full bg-[#D3E3C9] text-green-700 font-semibold text-sm shadow-sm'>What we are actually doing?</div>

{/* -----------------------big text */}

                  <div className='font-black text-5xl font-sans leading-16'>We bridge the gap <br />between plenty <br /> <span className='text-green-700'>and hunger.</span></div>

{/* -----------------------gray text*/}

                  <div className='font-medium text-gray-600'>At MealBridge, we're on a mission to build a world where <br />no good food is wasted and no one goes to the bed hungry. <br />We connect generous donors with people in need, <br />making kindness simple and impactful. </div>

{/* -----------------------three columns */}

                  <div className='flex gap-7 text-center'>

                    <div className='flex flex-col items-center gap-2 border-r border-gray-300 pr-8 self-stretch ' >
                      <i className="ri-bowl-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300"></i>
                      <h3 className='font-semibold text-green-800'>Reduce Waste</h3>
                      <p className='text-gray-700 text-sm'>We ensure surplus <br /> food reaches those <br />who need it most.</p>
                    </div>
                    
                    <div className='flex flex-col items-center gap-2 border-r border-gray-300 pr-8 self-stretch'>
                      <i className="ri-group-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300"></i>
                      <h3 className='font-semibold text-green-800'>Build Community</h3>
                      <p className='text-gray-700 text-sm '>We Bring People <br />together through <br />compassion and care.</p>
                    </div>

                    <div className='flex flex-col gap-2 items-center'>
                      <i className="ri-global-line flex items-center justify-center w-12 h-12 rounded-full bg-[#D3E3C9] text-green-800 text-2xl shadow-lg shadow-green-50  duration-300"></i>
                      <h3 className='font-semibold text-green-800'>Create Impact</h3>
                      <p className='text-gray-700 text-sm '>Small actions today <br />lead to better , <br />hunger-free tomorrow.</p>
                    </div>

                  </div>
                </div>
            </div>
    </div>
  )
}

export default About
