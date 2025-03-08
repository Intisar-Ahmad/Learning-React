import React, { useState } from 'react'
import LotteryTicket from './LotteryTicket'
import { genNumber, summing } from '../helperFunctions';

function LotteryGame({winningCondition}) {
    const [lotteryNumber,setLotteryNumber] = useState([0,0,0]);
    let [gameState,setGame] = useState("Click to start");
    let digits = 3;
    function changeState() {
      setLotteryNumber(()=>{
        const newArray = genNumber(digits);
        setGame(()=>winningCondition(newArray).func);
        return newArray;
      });
    }

  return (
    <div className='flex flex-col items-center'>
      <LotteryTicket lotteryNumber={lotteryNumber}/>
      <h1 className='text-2xl text-center font-semibold'>{gameState}</h1>
      <button className='w-40 h-14 rounded-full bg-zinc-500 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-zinc-500 text-white cursor-pointer' onClick={changeState}>Generate Number</button>
      <div className="mt-10 text-4xl text-center text-green-500">{winningCondition(lotteryNumber).cond}</div>
    </div>
  )
}

export default LotteryGame
