import React, { useState } from 'react'

function LudoBoard() {

    const [moves,setMoves] = useState({blue:0,green:0,red:0,yellow:0});
    const [arr,setArr] = useState(["No moves"]);
    function updateBlue() {
        setMoves((moves)=>{return {...moves,blue:moves.blue+1}});
        console.log(moves);
        arr.push("blue moves");
        setArr((arr)=>[...arr,"blue moved"]);
        console.log(arr);
    }

  return (
    <div>
        <p>Blue = {moves.blue}</p>
        <button onClick={updateBlue}>+1</button>
        <p>Red = {moves.red}</p>
        <button>+1</button>
        <p>Green = {moves.green}</p>
        <button>+1</button>
        <p>Yellow = {moves.yellow}</p>
        <button>+1{arr}</button>
    </div>
  )
}

export default LudoBoard
