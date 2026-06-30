import React from 'react'

const WorkCard = ({stepNumber,icon, title, description}) => {
  return (
    <div className="bg-[#FDF2F8] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-md transition duration-300">
        <div className="relative top-4 right-4 w-10 h-10 rounded-full bg-green-700 text-white font-bold flex items-center justify-center shadow-md">
    {stepNumber}
  </div>
        
      <i
        className={`${icon} flex items-center justify-center w-30 h-30  rounded-full bg-[#D3E3C9] text-green-800 text-6xl`}
      ></i>

      <div className='flex flex-col items-center' >
        <h2 className="mt-5 text-2xl font-bold ">{title}</h2>
        <div className='w-12 h-1 bg-green-700 rounded-full mt-2'></div>
      </div>

      <p className="mt-3 text-gray-600 leading-7 font-medium">
        {description}
      </p>
    </div>
  );
}

export default WorkCard
