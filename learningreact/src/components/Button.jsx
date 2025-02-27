import React from 'react'

function handleClick(event) {
    console.log(event);
}

function hi() {
    console.log("HI")
}

function Button() {
    return (
        <div>
            <button className='w-40 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white' onMouseEnter={hi} onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Button
