import {useReducer} from 'react'


function reducer(state,action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
     
      case "DECREMENT":
        return state - 1;
  
      case "DOUBLE":
        return state*2;
      
      case "RESET":
        return 0;
    
      default:
        return state;
        break;
    }
}

function Todos() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1 className='text-xl'>{count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
      <button onClick={()=>dispatch({type:"DOUBLE"})}>*</button>
      <button onClick={()=>dispatch({type:"RESET"})}>reset</button>
    </div>
  )
}

export default Todos

