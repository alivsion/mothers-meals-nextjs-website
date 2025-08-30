import React from 'react'

const ReviewCard = ({name , Date , review , img}) => {
  return (
  <>
   <div className="card item  mt-6 w-[25rem] p-5 rounded-lg shadow shadow-black flex-shrink-0">
    <div className="card-header">
      <div className="profile">
        <div className="flex item-center gap-5">

        <img className='rounded-full h-15' src={img} alt="" />
        <h2 className="text-xl font-semibold flex flex-col ">{name}

        <small className='font-medium text-gray-600 text-sm'>{Date}</small>

        </h2>
        </div>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div className="logo"></div>
    </div>
    <div className="card-body">
      <p className="text-lg text-gray-700 text-center">
       "{review}"
      </p>
      <p className="text-md text-gray-600 text-center mt-4">- A Happy Customer</p>
    </div>
  </div>
  
  
  </>
  )
}

export default ReviewCard