import React from 'react'

function handleClick(e){
    e.preventDefault();
    console.log("form was submitted");
}

function Form() {
  return (
    <form>
        <input type="text" placeholder='hello' />
        <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default Form;
