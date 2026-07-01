import React from 'react'
import Card from "../components/WorkCard"
import food from "../assets/food_work.png"
import map from "../assets/map_work.png"
import truck from "../assets/truck_work.png"
import family from "../assets/family_work.png"

const Work = () => {
const cards = [
        {
            stepNumber:1,
           icon: food ,
            title: "Donate Food",
            description: "Restaurants or individuals list surplus food on our platform in just a few clicks."
        },
        {
            stepNumber:2,
           icon:map ,
            title: "We Find It",
            description: "Our smart system locates nearby donations and notifies verified NGOs & volunteers."
        },
        {
            stepNumber:3,
           icon:truck ,
            title: "Pick Up & Deliver",
            description: "Volunteers or delivery partners pick up the food and ensure safe, quick delivery."
        },
        {
            stepNumber:4,
           icon:family ,
            title: "Food Reaches",
            description: "Nutritious food reaches those who need it most, spreading happiness & hope."
        }
    ]
  return (
    <div>
      <div id='how-it-works' className='min-h-screen w-full p-10 bg-pink-50'>
      <div className='min-h-screen rounded-4xl p-10 bg-pink-100 border border-pink-500 flex flex-col gap-5 items-center'>
                <div className='w-fit px-5 py-2 rounded-full bg-[#D3E3C9] text-green-700 font-semibold text-sm shadow-sm'>
                    <i className="ri-leaf-line mr-3"></i> 
                     Simple Steps, Powerful Impact.
                     </div>
                <h1 className='font-bold text-6xl'>How It <span className='text-green-800'>Works</span> </h1>
                <p className='text-center font-medium text-gray-500'>MealBridge makes food sharing simple and impactful. <br /> In just a few Steps, surplus food reaches those who need it.</p>

                <div className="grid grid-cols-4 gap-8 pt-10">
  {cards.map((card, index) => (
    <Card
      key={index}
      stepNumber={card.stepNumber}
      icon={card.icon}
      title={card.title}
      description={card.description}
    />
  ))}
</div>

<div className='w-fit px-5 py-3 rounded-full bg-gray-200 shadow-md  font-semibold text-sm mt-7  '>
                    <i className="ri-heart-2-line text-white h-5 w-5 rounded-full bg-green-700 p-2 mr-3"></i> 
                     Together, we can end hunger and build a better tomorrow.
                     </div>
        

      </div>
      </div>
    </div>
  )
}

export default Work
