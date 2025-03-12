import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, setError, formState: { errors ,isSubmitting } } = useForm();

  // const delay = async (d)=>{
  //   // return new Promise((resolve,reject)=>{
  //   //   // setTimeout(() => {
  //   //   //   resolve()
  //   //   // }, d * 1000);
  //   // })
  // }
  
  const onSubmit = async (data)=>{
    let r = await fetch("http://localhost:3000",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })// simulating network delay
    let res = await r.text();
    console.log(data,res)
    if(data.username === "bhino"){
      setError("myform",{message:"you can't be bhino there is only one bhino"})
    }
  }
  return (
    <>
    {errors.myform && <div>{errors.myform.message}</div>}
  <div className="container">
    {isSubmitting && <div>Loading...</div> }
  <form action="" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register("username",{required:{
      value:true,
      message:"I need that nigga"
    },minLength:{
      value:3,
      message:"Bigger Zaddy"
    }})} autoComplete='name' placeholder='username'/>
    {errors.username && <div>{errors.username.message}</div>}
    <br />
    <input type="password" {...register("password",{required:{
      value:true,
      message:"I need that nigga"
    },minLength:{
      value:8,
      message:"Bigger zaddy"
    }})} placeholder='password' autoComplete='new-password'/>
    <br />
    {errors.password && <div>{errors.password.message}</div>}
    <input disabled={isSubmitting} type="submit" value={"submit"} />
  </form>
  </div>
    </>
  )
}

export default App
