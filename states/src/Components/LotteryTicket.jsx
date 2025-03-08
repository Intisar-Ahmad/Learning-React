import React from 'react'



function LotteryTicket({lotteryNumber = [0,0,0]}) {
  return (
    <div>
     <h1 className='text-3xl text-center font-bold'>Lotter Number</h1>
     <p className='text-4xl text-center text-blue-500'>{lotteryNumber}</p>
    </div>
  )
}

export default LotteryTicket
