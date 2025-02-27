import React from 'react'

function Card({productName,specs,price,discount}) {
    let line_through = "";
    let text_size = "text-md";
    if(discount){
        line_through = "line-through";
        text_size = "text-sm"
    }
  return (
    <div className='w-[160px] h-[100%] bg-amber-400 rounded-lg overflow-hidden border-2 border-amber-400'>
      <div className='bg-blue-400 flex flex-col w-full h-[85%] rounded-t-lg rounded-b-sm'>
        <h3 className='font-bold text-sm text-center'>{productName}</h3>
        <div className='w-full  h-[65%]'></div>
       <ul className='list-disc pl-5 text-xs flex flex-col items-baseline ml-1'>{Array.isArray(specs)? specs.map((spec)=><li>{spec}</li>):false}</ul>
      </div>
      <div className='flex justify-center items-center bg-amber-400 gap-3'>
        <p className={`${line_through} ${text_size}`}>Rs.{price}</p>
        {discount && <p className='font-bold'>Rs.{price-discount}</p>}
      </div>
    </div>
  )
}

export default Card
