interface FoodCardProps {
  image: string;
  name: string;
  description: string;
  price: number | string;
  rating: number | string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, name, description, price, rating }) => {
  return (
    <div className="card item w-[19rem] p-5 rounded-lg shadow shadow-black flex-shrink-0 border border-[#D2B161] hover:shadow-lg transition-shadow duration-300">
      {/* Card Header */}
      <div className="card-header">
        <div className="food-img">
          <div className="flex flex-col   gap-5">
            {/* Food Image */}
            <img
              className="rounded-lg h-[10rem] w-[25rem] object-cover"
              src={image}
              alt={name}
            />
              
            {/* Food Name */}
            <h2 className="text-xl font-semibold flex flex-col">
              {name}
              <small className="font-medium text-gray-600 text-sm">
                {description}
              </small>
            </h2>
      
            {/* Price */}
            <p className="text-lg font-semibold text-[#E7154F]">
              ₹{price}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}

      {/* <div className="card-body">
        <button className="w-full cursor-pointer mt-4 py-2 rounded-lg bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white font-semibold hover:from-[#E7154F] hover:to-[#95063C] transition-transform duration-300 hover:scale-105">
          Order Now
        </button>
      </div> */}
    </div>
  );
};

export default FoodCard;