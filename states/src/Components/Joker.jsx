import React, { useEffect, useState } from 'react'

function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const [loader,setLoader] = useState(false);
    const initialState = {
        setup:"",
        punchline:""
    };
    const [joke,setJoke] = useState(initialState)
    useEffect(()=>{
           getJoke();
    },[]);

    async function getJoke() {
        setLoader(true);
        try {
            let a = await fetch(URL);
        if(a.ok){
           let res = await a.json();
           console.log(res);
           setJoke({
               setup:res.setup,
               punchline:res.punchline
           })
        }
        } catch (error) {
            console.log(error.message);
        }   
        setLoader(false);
    }


  return (
    <div className="flex flex-col items-center text-center">
      {loader ? (
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      ) : (
        <>
          <h2 className="text-lg font-semibold">{joke.setup}</h2>
          <h2 className="text-lg font-semibold mt-2">{joke.punchline}</h2>
        </>
      )}

      <button
        className="w-40 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-orange-500 text-white mt-5"
        onClick={getJoke}
        disabled={loader}
      >
        {loader ? "Loading..." : "Random Joke"}
      </button>
      
    </div>
  )
}

export default Joker
