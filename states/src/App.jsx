import { useState } from 'react'
import LotteryGame from './Components/LotteryGame'
import { summing } from './helperFunctions'
import WeatherWidget from './Components/WeatherWidget'
function App() {

  function winningCondition(ticket) {
    return {
      func:summing(ticket,12),
      cond:"Sum must be equal to 12"
    }
  }
 
  return (
    <>
<div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-full h-full animate-ping rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75"></div>
        <div className="absolute inset-0 w-full h-full animate-spin-slow rounded-full border-4 border-transparent border-t-purple-500"></div>
        <div className="w-10 h-10 bg-white rounded-full absolute inset-0 m-auto"></div>
      </div>
    </div>
    </>
  )
}

export default App
