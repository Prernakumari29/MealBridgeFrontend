import React from 'react'
import { useState } from 'react'
import {NavLink} from "react-router"
import logo from "../assets/mealBridge_logo.png"

const PublicNavbar = () => {
    const[activeSection , setActiveSection] = useState("home")
  return (
<div className='flex items-center justify-between h-20 px-10 bg-white  shadow-[0_8px_30px_rgba(0,0,0,0.08)] mb-2'>

        {/* -------------------------------------logo-------------------------------------------------------- */}
      <img src={logo} className='h-12' alt="MealBridgeLogo" />

      {/* --------------------------------------------middle section ------------------------------------------- */}
     <div>
  <nav className='flex items-center gap-8 font-medium text-gray-700'>

    {/* ------------------Home    */}
    <a
      href="#home"
      onClick={() => setActiveSection("home")}
      className={activeSection === "home"
    ? "text-green-600 font-semibold border-b-2 border-green-600"
    : "text-gray-700"}
    >
      Home
    </a>

{/* ----------------------About */}
    <a
      href="#about"
      onClick={() => setActiveSection("about")}
      className={activeSection === "about"
    ? "text-green-600 font-semibold border-b-2 border-green-600"
    : "text-gray-700"}
    >
      About Us
    </a>

{/* ----------------------How-it-works */}

    <a
      href="#how-it-works"
      onClick={() => setActiveSection("how-it-works")}
      className={activeSection === "how-it-works"
    ? "text-green-600 font-semibold border-b-2 border-green-600"
    : "text-gray-700"}
    >
      How It Works
    </a>

{/* ----------------------Impact */}

    <a
      href="#impact"
      onClick={() => setActiveSection("impact")}
      className={activeSection === "impact"
    ? "text-green-600 font-semibold border-b-2 border-green-600"
    : "text-gray-700"}
    >
      Impact
    </a>

{/* ----------------------Contact */}

    <a
      href="#contact"
      onClick={() => setActiveSection("contact")}
      className={activeSection === "contact"
    ? "text-green-600 font-semibold border-b-2 border-green-600"
    : "text-gray-700"}
    >
      Contact
    </a>

  </nav>
</div>

{/* ------------------------------------------------------login----------------------------------------------- */}
      <NavLink
  to="/auth"
  className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
>
  Join MealBridge
</NavLink>
    </div>
  )
}

export default PublicNavbar

