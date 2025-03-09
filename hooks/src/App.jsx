import { useState,useEffect,useRef } from 'react'
import Navbar2 from './components/Navbar2';
import { counterContext } from './context/context';

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
    <counterContext.Provider value={[count,setCount]}>
    <Navbar2/>
      <h1>Vite + React</h1>
      <div className="card">
        <button  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </counterContext.Provider>
    </>
  )
}

export default App
