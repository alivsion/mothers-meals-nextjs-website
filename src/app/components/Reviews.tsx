'use client'
import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import { motion } from "framer-motion"

const Reviews: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false); // State to control animation pause

  const CardData =[
    {
      "name": "Rahul Sharma",
      "date": "2025-10-08",
      "review": "The food was absolutely delicious and tasted just like home. Delivery was fast and hassle-free.",
      "imgSrc": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      "name": "Priya Verma",
      "date": "2025-10-05",
      "review": "I loved the freshness of the ingredients and the hygienic packaging. Definitely recommending to my friends.",
      "imgSrc": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      "name": "Amit Patel",
      "date": "2025-09-07",
      "review": "Excellent service! The food arrived hot, well-packed, and tasted amazing. Will order again.",
      "imgSrc": "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      "name": "Sneha Iyer",
      "date": "2025-08-20",
      "review": "A wonderful experience! The flavors were authentic, and the customer service was very polite.",
      "imgSrc": "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      "name": "Arjun Mehta",
      "date": "2025-05-25",
      "review": "Best food delivery I’ve had in a while. Neat packaging, fresh taste, and quick delivery.",
      "imgSrc": "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      "name": "Neha Singh",
      "date": "2025-05-30",
      "review": "The meals are healthy, tasty, and always on time. Feels like homemade food with professional service.",
      "imgSrc": "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ]
  

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
   <h1 className="text-4xl font-bold text-center">
  ❤️{" "}
  <span className="  bg-gradient-to-r from-[#95063C] to-[#E7154F] text-transparent bg-clip-text">
    The Love We’ve Earned
  </span>{" "}
  🙌
</h1>

      {/* Marquee Wrapper */}
      <div
        className="MarqueeWrapper relative     overflow-hidden p-6"

      >
        <motion.div
          className="flex gap-5 w-max  "
          animate={{ x: ["0%", "-50%"] }} // Stop animation when paused
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate twice for seamless loop */}
          {[...CardData, ...CardData].map((item, index) => (
            <ReviewCard
              key={index}
              name={item.name}
              Date={item.date}
              review={item.review}
                img={item.imgSrc}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Reviews
