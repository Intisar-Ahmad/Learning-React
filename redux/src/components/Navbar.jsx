import React from 'react'
import { useSelector } from 'react-redux'
function Navbar() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      this is a navabar{count}
    </div>
  )
}

export default Navbar
