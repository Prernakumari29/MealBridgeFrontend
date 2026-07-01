import React from 'react'
import Card from "../components/ImpactCard"

const Impact = () => {
    const cards =[
        {
            image:"cdfdf",
            title:"something",
            description:"something something"
        },
        {
            image:"cdfdf",
            title:"something",
            description:"something something"
        },
        {
            image:"cdfdf",
            title:"something",
            description:"something something"
        },
        {
            image:"cdfdf",
            title:"something",
            description:"something something"
        }
    ]
  return (
    <div>
      <div id='impact' className='min-h-screen w-full bg-pink-50 flex flex-col gap-4'>

        <div className='flex flex-col items-center' >
        <h2 className="mt-5 text-5xl font-bold ">Where Your Kindness Creates Change</h2>
        <div className='w-18 h-1 bg-green-700 rounded-full mt-5'></div>
      </div>

      <div className='grid grid-cols-4 gap-8 pt-10'>
        {cards.map((card, index) => (
    <Card
      key={index}
      image={card.image}
      title={card.title}
      description={card.description}
    />
  ))}

      </div>
 

      </div>
    </div>
  )
}

export default Impact
