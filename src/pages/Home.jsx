import React from 'react'
import PublicNavbar from '../components/PublicNavbar'

const Home = () => {
  return (
    <div>
      <PublicNavbar />
      <div id='home' className='min-h-screen w-full bg-pink-50'>Home</div>
      <div id='about' className='min-h-screen w-full bg-pink-600'>About page</div>
      <div id='how-it-works' className='min-h-screen w-full bg-yellow-300'>working page</div>
      <div id='impact' className='min-h-screen w-full bg-green-300'>impact page</div>
      <div id='contact' className='min-h-screen w-full bg-orange-500'>contact page</div>
    </div>
  )
}

export default Home
