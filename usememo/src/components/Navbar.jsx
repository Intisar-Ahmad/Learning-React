import React from 'react'
import { memo } from 'react';


function Navbar({adjective,getAdj}) {
    console.log("Navbar is rendered");
  return (
    <div>
      <nav>I am a {adjective} Navbar</nav>
      <button onClick={getAdj}>click me</button>
    </div>
  )
}

export default memo(Navbar)
