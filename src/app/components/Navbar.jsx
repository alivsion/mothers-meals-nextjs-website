'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDownLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu } from "react-icons/io5";
import { usePathname } from 'next/navigation'; // Import usePathname
import { BsDownload } from "react-icons/bs";
const Navbar = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(""); // State to store the current path
  const [isHidden, setIsHidden] = useState(true);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    setCurrentPath(pathname); // Set the current path on the client side
  }, [pathname]);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const navItems = ["Home", "Contact", "Who Are We", "Delivery Areas"];
  const navLinks = ["/", "/contact", "/who-are-we", "/delivery-areas"];

  const handlemenuanimation = {
    initial: { opacity: 0, y: 100, transition: { duration: 0.3 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.3 } },
  };

  const toggleCard = () => {
    if (isCardVisible) {
      // Start hiding the card
      setIsCardVisible(false);
      setTimeout(() => setIsHidden(true), 500); // Match the duration of the animation
    } else {
      // Show the card
      setIsHidden(false);
      setTimeout(() => setIsCardVisible(true), 0); // Trigger animation
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="nav sticky top-0 bg-white/30 backdrop-blur-sm w-full flex items-center justify-between p-5  shadow-md z-50">
        {/* Logo */}
        <div className="logo ">
          <Link href="/" className="flex items-center gap-2">
            <Image width={118} height={110} src="/mothers-meals-nextjs-website/Logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navLinks hidden lg:flex items-center gap-5">
          {navItems.map((item, index) => (
            <Link
              href={navLinks[index]}
              key={index}
              className={`navLink text-xl font-semibold relative group ${
                currentPath === navLinks[index] ? "text-[#95063C]" : "text-black"
              }`}
            >
              {item}
              {/* Border Bottom Animation */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#D2B161] transition-all duration-300 ${
                  currentPath === navLinks[index] ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="relative">
          {/* Grab Your Offer Button */}
          <div className="hidden lg:block">
            <div
              className="bg-gradient-to-r from-[#95063C] to-[#E7154F] cursor-pointer px-3 py-3 rounded-lg text-white font-bold hover:from-[#E7154F] hover:to-[#95063C] transition-colors"
              onClick={toggleCard} // Toggle visibility on click
            >
              🚀 Grab Your Offer
            </div>
          </div>

          {/* Card */}
          <div
            className={`card absolute top-21 right-5 flex flex-col items-center gap-5  bg-amber-50 w-90 rounded p-10 transition-all duration-500 ${
              isCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } ${isHidden ? 'hidden' : ''}`}
          >
               <h1 className=" flex items-center gap-2 text-3xl font-bold text-center text-nowrap    ">
              <span className='text-2xl font-bold'> <BsDownload /></span>  Download Our App  
              </h1>
              <div className="link flex justify-between items-center gap-1 ">
  <input
    type="tel"
    placeholder="Enter your phone number"
    className="px-5  py-3  rounded-lg border border-[#D2B161] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
  />
  <button className=" text-md text-nowrap bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white font-semibold px-2 py-3 rounded-lg shadow-md hover:from-[#E7154F] hover:to-[#95063C] transition-transform duration-300 hover:scale-105">
    Send Link
  </button>
</div>

            <div className="app flex justify-evenly gap-5 py-3 mt-3 cursor-pointer">
         
              <Image width={135} height={135} src="/mothers-meals-nextjs-website/appstore.webp" alt="App Store" />
              <Image width={135} height={135} src="/mothers-meals-nextjs-website/playstore.webp" alt="Play Store" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <span
          onClick={handleMenuToggle}
          className="cursor-pointer font-bold flex items-center gap-1 lg:hidden"
        >
          <IoMenu /> MENU
        </span>
      </nav>

      {/* Mobile Navigation (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu" // Ensure the key is consistent
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mobileLink w-[60vw] fixed top-0 right-0 h-full bg-black/60 shadow-lg z-50 backdrop-blur-lg text-white p-15"
            onClick={handleMenuToggle}
          >
            <motion.div
              className="navLinksM flex flex-col gap-10 p-5 h-full"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <span
                className="absolute top-5 right-5 font-bold text-2xl cursor-pointer p-5"
                onClick={handleMenuToggle}
              >
                <RxCross1 />
              </span>

              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={navLinks[index]}
                    className={`navLink font-semibold text-3xl relative group  ${
                      currentPath === navLinks[index] ? "text-[#95063C]" : "text-white"
                    }`}
                    onClick={handleMenuToggle}
                  >
                    {item}
                    {/* Border Bottom Animation */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#D2B161] transition-all duration-300 ${
                        currentPath === navLinks[index] ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              ))}

              {/* Card */}
              <div
  className={`card flex flex-col items-center gap-5 w-full max-w-md md:max-w-lg lg:max-w-xl rounded p-6 md:p-10 transition-all duration-500  `}
>
  <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-center text-nowrap">
    <span className="text-2xl font-bold">
      <BsDownload />
    </span>
    Download Our App
  </h1>

  {/* Input and Button */}
  <div className="link flex flex-col sm:flex-row justify-between items-center gap-3 w-screen p-5">
    <input
      type="tel"
      placeholder="Enter your phone number"
      className="w-full sm:w-auto flex-1 px-4 py-2 sm:py-3 rounded-lg border border-[#D2B161] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
    />
    <button className="text-md text-nowrap bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white font-semibold px-4 py-2 sm:py-3 rounded-lg shadow-md hover:from-[#E7154F] hover:to-[#95063C] transition-transform duration-300 hover:scale-105">
      Send Link
    </button>
  </div>

  {/* App Store and Play Store Buttons */}
  <div className="app flex justify-center     gap-5 py-3  cursor-pointer">
    <Image
      width={135}
      height={135}
      src="/mothers-meals-nextjs-website/appstore.webp"
      alt="App Store"
      className="w-32 sm:w-36"
    />
    <Image
      width={135}
      height={135}
      src="/mothers-meals-nextjs-website/playstore.webp"
      alt="Play Store"
      className="w-32 sm:w-36"
    />
  </div>
</div>
              {/* <Link
                href=""
                className="bg-green-600 px-3 py-3 rounded-lg text-white font-bold text-xl hover:bg-[#f48465ed] transition-colors mt-auto text-center"
              >
                🚀 Grab Your Offer
              </Link> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
