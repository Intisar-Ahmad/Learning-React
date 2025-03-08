import React, { useState } from 'react'

function CommentsForm() {
    let initialState = {
        username:"",
        comment:"",
        rating:0
    };
    const [remarks,setRemarks] = useState(initialState);

    function handleChange(event) {
        setRemarks((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted without reloading the page",remarks);
        setRemarks(initialState);
    }
  return (
    <div>
      <h3>Give a Comment</h3>
      <form action="" onSubmit={handleSubmit}>
        <input className='bg-zinc-700 text-white'  onChange={handleChange} value={remarks.username} type="text" placeholder='username' name='username'/>
        <br />
        <br />
        <textarea className='bg-zinc-700 text-white'  onChange={handleChange} value={remarks.comment} name="comment" id="comment" placeholder='comments'></textarea>
        <br />
        <br />
        <input className='bg-zinc-700 text-white'  onChange={handleChange} value={remarks.rating} type="number" min={0} max={5} placeholder='rating' name='rating'/>
        <br />
        <br />
        <input className='bg-zinc-700 text-white p-2' onChange={handleChange} type="submit" value="comment" />
      </form>
    </div>
  )
}

export default CommentsForm
