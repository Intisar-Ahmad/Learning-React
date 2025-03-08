import React, { useState } from 'react'

function Form() {
  const initialState = {
    fullname:"",
    username:"",
    password:""
}
    const [formData,setFormData] = useState(initialState);
   function handleInputChange(event) {
    const name = event.target.name; 
    const value = event.target.value;
    setFormData({...formData,[name]:value})
   }

   function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData(initialState)
   }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='bg-zinc-800 w-full h-1/2'>
        <label htmlFor="username">hi</label>
        <input className='bg-zinc-700 text-white p-2' placeholder='fullname' id='fullname' value={formData.fullname} onChange={handleInputChange} type="text" name="fullname" autoComplete='name' />
        <input className='bg-zinc-700 text-white p-2' placeholder='username' id='username' value={formData.username} onChange={handleInputChange} type="text" name="username" autoComplete='username' />
        <input className='bg-zinc-700 text-white p-2' placeholder='password' id='password' value={formData.password} onChange={handleInputChange} type="password" name="password" autoComplete='current-password'/>
        <input className='bg-zinc-900 text-white p-2' type="submit" />
      </form>
    </div>
  )
}

export default Form
