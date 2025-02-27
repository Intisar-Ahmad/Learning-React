import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    
    // console.log(count)
    function plus(){
      setCount((count)=>count + 1)
    }
    // console.log(count)
  return (
   <button onClick={plus}>Count is {count}</button>
  )
}

export default Counter;
