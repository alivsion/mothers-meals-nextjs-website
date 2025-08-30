 
import React from 'react'

const CookingProcess = () => {
  const processData = [
    {
      video: "/Cooking/woman-looks-at-organic-food-animation-gif-download-12133634.mp4",
      title: "Fresh Ingredients Sourced Daily",
      desc: "Only the best and freshest ingredients go into your meals.",
      Step: "🥬 Step 1 – Pick & Prep",
       
      
    },
    {
      video: "/Cooking/cooking-animated-icon-gif-download-7463986.mp4",
      title: "Cooked with Hygiene & Care",
      desc: "Expert home chefs prepare food with top hygiene standards.",
      Step: "🍳 Step 2 – Cook & Care",
       

    },
    {
      video: "/Cooking/Delivery guy.mp4",
      title: "Hot & Safe Delivery to Your Doorstep",
      desc: "Your meal reaches you fresh, hot, and safely packed.",
      Step: "📦 Step 3 – Hot & Handed",
       
    }
  ]

  return (
    <>
      <div className="p-5 mb-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl mb-10 text-center leading-snug">
          🍴 <span className="uppercase font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            From Kitchen to Your Home
          </span>
        </h1>

        {/* Circles + Steps */}
        <div className="grid gap-10 sm:grid-cols-3 text-center">
          {processData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              {/* Circle with video */}
              <div className="circle flex justify-center items-end w-36 h-36 sm:w-[20vw] sm:h-[20vw] lg:w-[17vw] lg:h-[17vw] rounded-full bg-white border border-pale-grey">
                <video
                  src={item.video}
                  className="rounded-full object-cover w-full h-full   "
                  autoPlay
                  loop
                  muted
                />
              </div>

              {/* Step text linked directly under circle */}
              <div>
                <h1 className={`text-xl font-bold uppercase ${item.color }`}>{item.Step}</h1>
                <h2 className={`text-sm sm:text-xl   text-gray-600 mb-1 ${item.color }`}>{item.title}</h2>
                {/* <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CookingProcess
