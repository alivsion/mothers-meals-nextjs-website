import Image from "next/image";
import React from "react";
import Guideline from "./Guideline";

const SafetySec = () => {
  const RidersGuidelinesData = [
    {
      heading: "Sanitization Standards",
      para: "Riders follow strict hygiene with masks, gloves, sanitizers & daily checks.",
      img: "/rider-guideline/SANITIZATION-STANDARDS.webp",
    },
    // {
    //   heading: "Contactless Delivery",
    //   para: "Food is picked up and delivered with zero contact for safety.",
    //   img: "/rider-guideline/CONTACTLESS-DELIVERY.webp",
    // },
    {
      heading: "Rider Supervision",
      para: "Daily health checks ensure riders wear masks & follow distancing.",
      img: "/rider-guideline/RIDER-SUPERVISION.webp",
    },
  ];
  

  const ChefsGuidelinesData = [
    {
      heading: "Cleaning & Sanitization",
      para: "Chefs wash hands regularly and sanitize kitchens twice a day.",
      img: "/chief-guideline/CLEANING-SANITIZATION.webp",
    },
    // {
    //   heading: "Mask & Distancing",
    //   para: "Chefs wear masks and maintain safe social distancing.",
    //   img: "/chief-guideline/MASK-SOCIAL-DISTANCING.webp",
    // },
    {
      heading: "Healthy & Fresh",
      para: "Meals are freshly cooked using only top-quality ingredients.",
      img: "/chief-guideline/HEATHY-FRESHLY-PREPARED.webp",
    },
  ];
  
  return (
    <>
      <div className="head w-full flex justify-center items-center px-4">
        <div className="inner flex flex-col lg:flex-row  items-center gap-6 lg:gap-30">
          <Image
            width={80}
            height={80}
            src="/safety-badge/Badge1.webp"
            alt=""
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
         <h1 className="text-2xl montserrat lg:text-4xl text-center ">
         🛡️<span className="bg-gradient-to-r from-[#D2B161] to-[#E7154F] text-transparent bg-clip-text"> Your Safety, Our First Priority</span> 
</h1>
          <Image
            width={80}
            height={80}
            src="/safety-badge/Badge2.webp"
            alt=""
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly   px-4 w-full   ">
        <div className="rider-guideline flex flex-col gap-6 lg:gap-10 p-4 lg:p-10">
          <h1 className="text-xl lg:text-2xl mb-3 lg:mb-5 font-semibold">
            Riders Deliver Guidelines
          </h1>

          {RidersGuidelinesData.map((item, index) => (
            <Guideline
              key={index}
              heading={item.heading}
              para={item.para}
              img={item.img}
            />
          ))}
        </div>
        <div className="ChefsGuideline flex flex-col gap-6 lg:gap-10 p-4 lg:p-10">
          <h1 className="text-xl lg:text-2xl mb-3 lg:mb-5 font-semibold">
            Home Chefs Cooking Guidelines
          </h1>
          {ChefsGuidelinesData.map((item, index) => (
            <Guideline
              key={index}
              heading={item.heading}
              para={item.para}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SafetySec;
