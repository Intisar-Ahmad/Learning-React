import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Bhino",
    age:19
  }
  return (
    <>
   <h1 className='bg-green-500 rounded-lg p-5' >Tailwind Test</h1>
   <Card learning="Bhino" Obj="Hello" myarr={[1,2,3]} />
   <Card learning="Bhino" Obj="Hi" myarr={[1,2,3]} />
   <Card learning="Bhino" />
        
    </>
  )
}

export default App
