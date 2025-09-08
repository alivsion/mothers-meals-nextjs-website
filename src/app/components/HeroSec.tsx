import Image from "next/image"
import Link from "next/link"

const HeroSec: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <section className="heroSec p-15 w-[100%] rounded-xl overflow-x-hidden">
          <div className="rounded-xl flex flex-col justify-center bg-cover bg-center text-black items-start">
            
            {/* Title with overlay only behind text */}
            <div className="relative inline-block">
              {/* Gradient overlay just for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-transparent rounded-lg"></div>

              <h1 className="leading-16 relative text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-amber-50 montserrat text-left drop-shadow-lg  py-2 ">
                We Don’t <br />
             
                Make it Until  
                <br />
                You Order it!
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 w-80 text-left">
              Your favorite food delivered <br/> to your doorstep
            </p>

            <div className="flex gap-4">
              {/* Play Store Link */}
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff3700] via-[#f0643e] to-[#ffa500] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-border"></div>
                <Image
                  width={192}
                  height={60}
                  src="/playstore.webp"
                  alt="Download on Play Store"
                  className="relative w-40 sm:w-48 md:w-40 h-auto shadow-lg rounded-lg"
                />
              </Link>

              {/* App Store Link */}
              <Link
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff3700] via-[#f0643e] to-[#ffa500] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-border"></div>
                <Image
                  width={192}
                  height={60}
                  src="/appstore.webp"
                  alt="Download on App Store"
                  className="relative w-40 sm:w-48 md:w-40 h-auto shadow-lg rounded-lg"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HeroSec
