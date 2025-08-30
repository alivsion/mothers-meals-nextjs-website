import React from "react";

const WhoAreWe = () => {
  return (
    <div className="whoAreWePage">
      {/* Hero Section */}
      <section className="heroSec mt-5 p-15 w-full rounded-xl overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: "url('/home-foodi-bg.webp')" }}>
        <div className="flex flex-col py-20">
          <h1 className="text-5xl font-bold mb-4 montserrat">
            Who Are <span className="text-[#E7154F]">We?</span>
          </h1>
          <p className="text-xl text-gray-300 w-80">
            Delivering fresh, homemade meals with love and care.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="aboutSection flex flex-col md:flex-row items-center justify-evenly p-10 bg-gray-50">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            At Mother Meals, we believe in providing freshly prepared, hygienic, and delicious meals made by love and care. Our goal is to bring the warmth of home-cooked food to your doorstep.
          </p>
        </div>
        <div>
          <img
            src="/Trust Badge/Authentic.webp"
            alt="Authentic Food"
            className="w-0   md:w-60 sm:w-40 rounded-lg"
          />
        </div>
      </section>

      {/* Ready to Taste Home Section */}
    

      {/* Values Section */}
      <section className="valuesSection   py-10 ">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600">
            What makes us stand out.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Value 1 */}
          <div className="valueCard text-center">
            <img
              src="/Trust Badge/Fresh.webp"
              alt="Fresh Food"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Freshness
            </h3>
            <p className="text-gray-600">
              Meals are freshly prepared just for you.
            </p>
          </div>
          {/* Value 2 */}
          <div className="valueCard text-center">
            <img
              src="/Trust Badge/Hygiene.webp"
              alt="Hygiene"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Hygiene
            </h3>
            <p className="text-gray-600">
              Cleanliness and safety are our top priorities.
            </p>
          </div>
          {/* Value 3 */}
          <div className="valueCard text-center">
            <img
              src="/Trust Badge/Highest-Rating.webp"
              alt="Quality"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Quality
            </h3>
            <p className="text-gray-600">
              Only the best ingredients for every meal.
            </p>
          </div>
        </div>
      </section>
      <section className="readyToTaste shadow-2xl bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white py-10 px-6 text-center rounded-xl mb-5">
      <h2 className="text-4xl font-bold mb-4 uppercase  ">
  Ready to Taste Home?
</h2>
  <p className="text-lg mb-6 text-gray-200">
    Download the Mother’s Meal App and enjoy fresh,<br /> home-cooked food delivered to your door.
  </p>
  <div className="flex justify-center gap-4">
    <img
      src="/appstore.webp"
      alt="Download on App Store"
      className="w-40 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg rounded-lg"
    />
    <img
      src="/playstore.webp"
      alt="Get it on Google Play"
      className="w-40 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg rounded-lg"
    />
  </div>
</section>
    </div>
  );
};

export default WhoAreWe;