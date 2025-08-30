import React from 'react'

const Guideline = ({heading , para , img}) => {
  return (
  
    <>
       <div className=" flex   gap-5 items-center  ">
        <img className='w-25 h-25' src={img} alt="" />
       <div className="content">
        <h1 className='text-lg font-bold uppercase'>{heading}</h1>
<p className='  font-semibold text-gray-600  '>{para}</p>
        </div> 
        
        </div>
    
    
    </>
  )
}

export default Guideline