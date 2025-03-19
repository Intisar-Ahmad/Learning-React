import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { increment,decrement, incrementByAmount,multiply } from './redux/counter/counterSlice.js'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
    <Navbar/>
       <div>
    <button onClick={()=>dispatch(decrement())}>-</button>
     count is {count}
       <button onClick={()=>dispatch(multiply())}>+</button>
       </div>
       
    </>
  )
}

export default App
