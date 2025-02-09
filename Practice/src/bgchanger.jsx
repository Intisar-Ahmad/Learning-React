import { useState } from "react";


function bgChanger() {
    const [color, setColor] = useState("bg-zinc-900");
  
    
  
    return (
      <div className={`w-screen h-screen ${color} `}>
        <div className=" fixed bottom-2 w-full h-44 flex gap-4 justify-center items-center">
          <button className="w-[8%] h-20 bg-zinc-900 rounded-lg cursor-pointer text-white" onClick={()=>setColor("bg-zinc-900")}>Black</button>
          <button className="w-[8%] h-20 bg-blue-500 rounded-lg cursor-pointer" onClick={()=>setColor("bg-blue-500")}>Blue</button>
          <button className="w-[8%] h-20 bg-red-500 rounded-lg cursor-pointer" onClick={()=>setColor("bg-red-500")}>Red</button>
          <button className="w-[8%] h-20 bg-green-500 rounded-lg cursor-pointer" onClick={()=>setColor("bg-green-500")}>Green</button>
          <button className="w-[8%] h-20 bg-yellow-500 rounded-lg cursor-pointer" onClick={()=>setColor("bg-yellow-500")}>Yellow</button>
          <button className="w-[8%] h-20 bg-pink-500 rounded-lg cursor-pointer" onClick={()=>setColor(" bg-pink-500")}>Pink</button>
          <button className="w-[8%] h-20 bg-purple-500 rounded-lg cursor-pointer" onClick={()=>setColor("bg-purple-500")}>Purple</button>
          <button className="w-[8%] h-20 bg-amber-950 rounded-lg cursor-pointer" onClick={()=>setColor("bg-amber-950")}>Brown</button>
          <button className="w-[8%] h-20 bg-zinc-500 rounded-lg cursor-pointer" onClick={()=>setColor("bg-zinc-500")}>Grey</button>
        </div>
      </div>
    )
  }

  export default bgChanger;