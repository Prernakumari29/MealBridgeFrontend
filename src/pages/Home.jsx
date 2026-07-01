import React from 'react'
import PublicNavbar from '../components/PublicNavbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Work from '../sections/Work'
import Impact from '../sections/Impact'

const Home = () => {
  return (
    <div>
      <PublicNavbar />
      
      <Hero />
      <About />
      <Work />
      <Impact />
      <div id='contact' className='min-h-screen w-full bg-orange-500'>contact page</div>
    </div>
  )
}

export default Home
