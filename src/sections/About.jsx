import React from 'react'
import AboutImage from "../assets/MealBridge_About.png"

const About = () => {
  return (
    <div id='about' className='min-h-screen w-full bg-[#FBE5F1]'>
            <div className='flex justify-between'>
                
                <div className='pt-15'>
                    <img src={AboutImage} alt="" className='h-150' />
                </div>
                <div>hello</div>
            </div>
    </div>
  )
}

export default About
