import React, { useState ,useEffect} from 'react'


function Counter() {
    const [countx,setCountx] = useState(0);
    const [county,setCounty] = useState(0);
    useEffect(()=>{
      console.log("effecting all the way")
    },[countx])
    function plusx(){
      setCountx((count)=>count+1);
    }
    function plusy(){
      setCounty((count)=>count+1);
    }
    
  return (
  <div>
     <button className='w-40 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white' onClick={plusx}>Countx is {countx}</button>
     <button className='w-40 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white' onClick={plusy}>County is {county}</button>
  </div>
  )
}

export default Counter;
