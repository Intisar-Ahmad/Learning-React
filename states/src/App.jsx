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
 < WeatherWidget/>
    </>
  )
}

export default App
