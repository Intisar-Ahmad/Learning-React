import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter,setCounter] = useState(0);
  

  function addValue(){
    console.log(Counter);
    if(Counter <20){
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }
  function RemoveVal(){
    console.log(Counter);
    if(Counter > 0){
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);

    }
  }

  return (
    <>
 <h1> Bhino aur react</h1>
 <h2>Counter value : {Counter}</h2>
 <button onClick={addValue}>Add value {Counter} </button>
 <br />
 <button onClick={RemoveVal}>Decrease value {Counter} </button>
 <p>footer : {Counter}</p>
    </>
  )
}

export default App
