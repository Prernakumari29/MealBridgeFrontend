import React from 'react'

const WorkCard = ({stepNumber,icon, title, description}) => {
  return (
    <div className="relative bg-[#FDF2F8] p-6 rounded-2xl shadow-lg border border-transparent flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:border-green-300">
        <div className="relative top-6 right-4 w-10 h-10 rounded-full bg-green-700 text-white font-bold flex items-center justify-center shadow-md">
    {stepNumber}
  </div>
        

    <div className="  flex items-center justify-center">
  <img
    src={icon}
    alt=""
    className=" h-45 object-cover pl-7"
  />
</div>

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
