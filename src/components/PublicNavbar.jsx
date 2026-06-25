import React from 'react'
import { useState } from 'react'
import {NavLink} from "react-router"

const PublicNavbar = () => {
    const[activeSection , setActiveSection] = useState("home")
  return (
<div className='flex items-center justify-between h-18 px-8 bg-white shadow-2xl'>

        {/* -------------------------------------logo-------------------------------------------------------- */}
      <div>logo</div>

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
      <div>login</div>
    </div>
  )
}

export default PublicNavbar

