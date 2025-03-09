import React ,{useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'


function Button() {
    const [_,setCount] = useContext(counterContext)
  return (
    <div>
      <button onClick={()=>setCount((prev)=>prev+1)}><span><Component1/></span>click me</button>
    </div>
  )
}

export default Button
