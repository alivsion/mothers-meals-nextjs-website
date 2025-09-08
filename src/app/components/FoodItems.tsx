"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FoodCard from "./FoodCard";

interface Dish {
  id: number;
  name: string;
  img: string;
}

const initialDishes: Dish[] = [
  { id: 1, name: "Hyderabadi Biryani", img: "https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01.jpg" },
  { id: 2, name: "Paneer Tikka", img: "https://www.cookingcarnival.com/wp-content/uploads/2021/07/Hariyali-Paneer-Tikka-4.jpg" },
  { id: 3, name: "Masala Dosa", img: "https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa-1024x683.jpg" },
  { id: 4, name: "Samosa", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg" },
  { id: 5, name: "Chole Bhature", img: "https://static.vecteezy.com/system/resources/previews/015/933/726/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg" },
  { id: 6, name: "idli", img: "https://www.foodie-trail.com/wp-content/uploads/2020/06/251fdbc0-57f6-41c3-a976-5192391cf040.jpg" },
];

const FoodItems: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [dragLimit, setDragLimit] = useState<number>(0);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const firstCard = container.querySelector("div") as HTMLElement;
      const gap = 24; // gap-6 in Tailwind = 24px

      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + gap);
      }

      // Calculate drag limits for manual dragging
      const totalScroll = container.scrollWidth - container.offsetWidth - gap;
      setDragLimit(totalScroll > 0 ? totalScroll : 0);
    }
  }, [dishes]);

  // Function to handle user interaction (pause animation)
  const handleUserInteraction = () => {
    setIsPaused(true);
    
    // Clear existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Set new debounce timer
    debounceTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // Continuous leftward movement
  useEffect(() => {
    if (cardWidth === 0 || isPaused) return;

    const moveCards = async () => {
      if (isAnimating || isPaused) return;
      
      setIsAnimating(true);

      // Step 1: Move all cards to the left by one card width (200ms)
      await controls.start({
        x: -cardWidth,
        transition: { duration: 0.2, ease: "easeInOut" },
      });

      // Step 2: Immediately after animation, rearrange the array
      // Move the first card to the end and reset position
      setDishes(prevDishes => {
        const newDishes = [...prevDishes];
        const firstCard = newDishes.shift(); // Remove first card
        if (firstCard) {
          newDishes.push(firstCard); // Add it to the end
        }
        return newDishes;
      });

      // Step 3: Reset position instantly (no animation)
      controls.set({ x: 0 });

      setIsAnimating(false);
    };

    const interval = setInterval(() => {
      moveCards();
    }, 1000); // 200ms animation + 800ms pause = 1000ms total

    return () => clearInterval(interval);
  }, [cardWidth, controls, isAnimating, isPaused]);

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
          initial={{ x: 0 }}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleUserInteraction}
          onTap={handleUserInteraction}
          whileTap={{ cursor: "grabbing" }}
          whileDrag={{ cursor: "grabbing" }}
        >
          {dishes.map((dish, index) => (
            <FoodCard
              key={`${dish.id}-${index}`} // Use combination of id and index for unique keys
              image={dish.img}
              name={dish.name}
              description={`Delicious ${dish.name} to satisfy your cravings!`}
              price="199"
              rating="4.5"
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
