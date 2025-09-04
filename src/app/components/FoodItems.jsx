"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FoodCard from "./FoodCard";

const dishes = [
  { id: 1, name: "Hyderabadi Biryani", img: "https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01.jpg" },
  { id: 2, name: "Paneer Tikka", img: "https://www.cookingcarnival.com/wp-content/uploads/2021/07/Hariyali-Paneer-Tikka-4.jpg" },
  { id: 3, name: "Masala Dosa", img: "https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa-1024x683.jpg" },
  { id: 4, name: "Samosa", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg" },
  { id: 5, name: "Chole Bhature", img: "https://static.vecteezy.com/system/resources/previews/015/933/726/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg" },
  { id: 6, name: "idli", img: "https://www.foodie-trail.com/wp-content/uploads/2020/06/251fdbc0-57f6-41c3-a976-5192391cf040.jpg" },
 ];

const FoodItems = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [dragLimit, setDragLimit] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const firstCard = container.querySelector("div");
      const gap = 24; // gap-6 in Tailwind = 24px

      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + gap);
      }

      const totalScroll = container.scrollWidth - container.offsetWidth - gap;
      setDragLimit(totalScroll > 0 ? totalScroll : 0);
    }
  }, []);

  // Step-by-step autoplay
  useEffect(() => {
    if (cardWidth === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        let next = prev + direction;

        // If reached last card → reverse
        if (next * cardWidth >= dragLimit) {
          setDirection(-1);
          next = prev - 1;
        }
        // If reached first card → forward
        else if (next < 0) {
          setDirection(1);
          next = 1;
        }

        controls.start({
          x: -next * cardWidth,
          transition: { duration: 0.6, ease: "easeInOut" },
        });

        return next;
      });
    }, 2000); // every 2s

    return () => clearInterval(interval);
  }, [cardWidth, dragLimit, controls, direction]);

  return (
    <>
      <h2 className="text-4xl sm:text-5xl text-center mb-10">
        🍲
        <span className="font-extrabold uppercase bg-gradient-to-r from-[#95063C] to-[#E7154F] bg-clip-text text-transparent tracking-wide">
          Our Items
        </span>
        🥗
      </h2>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] p-6 overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex flex-nowrap gap-6 cursor-grab"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {dishes.map((dish) => (
            <FoodCard
              key={dish.id}
              image={dish.img}
              name={dish.name}
              description={`Delicious ${dish.name} to satisfy your cravings!`}
              price="199"
            />
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <button className="w-fit cursor-pointer mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white font-semibold hover:from-[#E7154F] hover:to-[#95063C] transition-transform duration-300 hover:scale-105">
          Available on App
        </button>
      </div>
    </>
  );
};

export default FoodItems;
