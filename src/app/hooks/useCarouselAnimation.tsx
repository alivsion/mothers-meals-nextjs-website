// hooks/useCarouselAnimation.ts
import { useRef, useState, useEffect } from "react";
import { useAnimation} from "framer-motion";

// Define the shape of a dish object
export interface Dish {
  id: number;
  name: string;
  img: string;
}

/**
 * Reusable Custom Hook for Carousel Animation Logic
 * @param initialData - The initial array of dishes for the carousel.
 * @param direction - 'left' for right-to-left movement, 'right' for left-to-right movement.
 */
export const useCarouselAnimation = (initialData: Dish[], direction: 'left' | 'right') => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [dishes, setDishes] = useState<Dish[]>(initialData);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [dragLimit, setDragLimit] = useState<number>(0);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const firstCard = container.querySelector("div") as HTMLElement;
      const gap = 24; // Corresponds to gap-6 in Tailwind CSS

      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + gap);
      }
      const totalScroll = container.scrollWidth - container.offsetWidth - gap;
      setDragLimit(totalScroll > 0 ? totalScroll : 0);
    }
  }, [dishes]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500); // Increased pause time after user interaction
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (cardWidth === 0 || isPaused) return;

    const moveCards = async () => {
      if (isAnimating || isPaused) return;
      setIsAnimating(true);
      
      const moveAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      await controls.start({
        x: moveAmount,
        transition: { duration: 0.3, ease: "easeInOut" },
      });

      if (direction === 'left') {
        setDishes(prevDishes => {
          const newDishes = [...prevDishes];
          const firstCard = newDishes.shift();
          if (firstCard) newDishes.push(firstCard);
          return newDishes;
        });
      } else {
        setDishes(prevDishes => {
            const newDishes = [...prevDishes];
            const lastCard = newDishes.pop();
            if(lastCard) newDishes.unshift(lastCard);
            return newDishes;
        });
      }

      controls.set({ x: 0 });
      setIsAnimating(false);
    };

    const interval = setInterval(moveCards, 1500);

    return () => clearInterval(interval);
  }, [cardWidth, controls, isAnimating, isPaused, direction, dishes]);

  return {
    carouselRef,
    controls,
    dishes,
    dragLimit,
    handleUserInteraction,
  };
};