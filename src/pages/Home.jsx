import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import Hero from '../sections/Hero'
import About from '../sections/About'

const Home = () => {
  return (
    <div>
      <PublicNavbar />
      
      <Hero />
      <About />
      <div id='how-it-works' className='min-h-screen w-full bg-yellow-300'>working page</div>
      <div id='impact' className='min-h-screen w-full bg-green-300'>impact page</div>
      <div id='contact' className='min-h-screen w-full bg-orange-500'>contact page</div>
    </div>
  )
}

export default Home
