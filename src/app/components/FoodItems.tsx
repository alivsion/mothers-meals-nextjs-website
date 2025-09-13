// components/FoodItems.tsx
"use client";
import { motion, } from "framer-motion";
import FoodCard from "./FoodCard";
import { useCarouselAnimation, Dish } from "../hooks/useCarouselAnimation";

// Data for the carousels
const initialVegDishes: Dish[] = [
    { id: 1, name: "Sabudana Khichdi, Raita", img: "https://www.indianveggiedelight.com/wp-content/uploads/2022/03/sabudana-khichdi-recipe-1.jpg" },
    { id: 2, name: "Chole With Paratha", img: "https://www.myhealthybreakfast.in/wp-content/uploads/2021/04/chole-paratha.jpg" },
    { id: 3, name: "Mix Veg Curry With Chapati", img: "https://www.whiskaffair.com/wp-content/uploads/2021/07/Mix-Vegetable-Curry-2-3.jpg" },
    { id: 4, name: "Alu Gobi With Chapati", img: "https://static.toiimg.com/thumb/61250268.cms?width=1200&height=900" },
    { id: 5, name: "Kabuli Chana With Butter Naan", img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/KABULI_CHANA_MASALA_WITH_NAAN.jpg" },
    { id: 6, name: "Methi Muttor Malai", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/methi-mutter-malai-recipe.jpg" },
    { id: 7, name: "Soya Chunks With Chapati", img: "https://thefoodxp.com/wp-content/uploads/2021/02/Soya-Chunks-Curry-Recipe-1.jpg" },
    { id: 8, name: "Gobi Manchurian", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/gobi-manchurian-recipe.jpg" },
    { id: 9, name: "Paneer Paratha", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/paneer-paratha-recipe.jpg" },
    { id: 10, name: "Alu Ka Qurma With Rice", img: "https://i.ytimg.com/vi/O2Z3v54RCkI/maxresdefault.jpg" },
    { id: 11, name: "Palak Paneer With Jeera Rice", img: "https://myfoodstory.com/wp-content/uploads/2021/11/Palak-Paneer-4.jpg" },
    { id: 12, name: "Vegetable Tahari With Raita", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/tahari-recipe-1.jpg" },
];

const initialNonVegDishes: Dish[] = [
    { id: 13, name: "Chicken Kheema With Chapati", img: "https://zpre.s3.ap-south-1.amazonaws.com/s3fs-public/2022-07/shutterstock_1899141019.jpg" },
    { id: 14, name: "Omlet Khulcha", img: "https://static.toiimg.com/thumb/55324292.cms?width=1200&height=900" },
    { id: 15, name: "Chicken Shami With Paratha", img: "https://www.masala.tv/wp-content/uploads/2022/05/chicken-shami-kabab.jpg" },
    { id: 16, name: "Red Chicken With Chapati", img: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20images/Red-Chicken-curry.webp" },
    { id: 17, name: "Malai Chicken With Chapati", img: "https://myfoodstory.com/wp-content/uploads/2022/05/Murgh-Malai-Tikka-3.jpg" },
    { id: 18, name: "Chicken Nahari With Chapati", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/chicken-nihari-recipe.jpg" },
    { id: 19, name: "Chicken Majestic", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/12/chicken-majestic-recipe.jpg" },
    { id: 20, name: "Chicken Do Piyaza", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/chicken-do-pyaza.jpg" },
    { id: 21, name: "Chicken 65 With Rice", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-recipe.jpg" },
    { id: 22, name: "Dum Chicken Kheema", img: "https://www.awesomecuisine.com/wp-content/uploads/2015/05/kheema-dum.jpg" },
    { id: 23, name: "Odisa Chicken Curry", img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/swathynandini/ODISHA_STYLE_CHICKEN_CURRY.jpg" },
    { id: 24, name: "Kadai Chicken With Rice", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/kadai-chicken-recipe.jpg" },
];

// Helper function to render a carousel
const Carousel = ({
  carousel,
  direction,
  title,
}: {
  carousel: ReturnType<typeof useCarouselAnimation>;
  direction: 'left' | 'right';
  title: string;
}) => (
  <div className="mb-16">
    <h3 className="text-3xl sm:text-4xl mb-5 text-center font-bold tracking-wide text-gray-800">
      {title}
    </h3>
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] p-1 overflow-hidden">
      <motion.div
        ref={carousel.carouselRef}
        className="flex flex-nowrap gap-6 cursor-grab"
        animate={carousel.controls}
        initial={{ x: 0 }}
        drag="x"
        dragConstraints={
          direction === 'left'
            ? { left: -carousel.dragLimit, right: 0 }
            : { left: 0, right: carousel.dragLimit }
        }
        dragElastic={0.1}
        onDragStart={carousel.handleUserInteraction}
        onTap={carousel.handleUserInteraction}
        whileTap={{ cursor: "grabbing" }}
        whileDrag={{ cursor: "grabbing" }}
      >
        {carousel.dishes.map((dish, index) => (
          <FoodCard
            key={`${dish.id}-${index}`}
            image={dish.img}
            name={dish.name}
            description={`Delicious ${dish.name} to satisfy your cravings!`}
            price="199"
            rating="4.5"
          />
        ))}
      </motion.div>
    </div>
  </div>
);

const FoodItems: React.FC = () => {
  const vegCarousel = useCarouselAnimation(initialVegDishes, 'right');
  const nonVegCarousel = useCarouselAnimation(initialNonVegDishes, 'left');

  return (
    <>
      <h2 className="text-4xl sm:text-5xl text-center my-10">
        🍲
        <span className="font-extrabold uppercase bg-gradient-to-r from-[#95063C] to-[#E7154F] bg-clip-text text-transparent tracking-wide">
          Our Items
        </span>
        🥗
      </h2>

      <Carousel carousel={vegCarousel} direction="left" title="🥗 Veg Delights 🥦" />
      <Carousel carousel={nonVegCarousel} direction="left" title="🍗 Non-Veg Feasts 🍖" />

      <div className="flex items-center justify-center mb-8">
        <button className="w-fit cursor-pointer mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white font-semibold hover:from-[#E7154F] hover:to-[#95063C] transition-transform duration-300 hover:scale-105">
          Available on App
        </button>
      </div>
    </>
  );
};

export default FoodItems;