import React,{useContext} from 'react'
import { counterContext } from '../context/context'

function Component1() {
    const [counter] = useContext(counterContext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Component1
