import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchBox() {
    const [city,setCity] = useState("");
    const [weather,setWeather] = useState("")
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0da02d10d323e1fc057ac81a40a8fe3d`; 

    function handleChange(e) {
        setCity(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let a = await fetch(URL);
            if(a.ok){
                let res = await a.json();
                console.log(res);
                setWeather({
                    city:res.name,
                    temp:res.main.temp - 273,
                    feels_like:res.main.feels_like - 273,
                    condition:res.weather[0].main
                })
            }
        } catch (error) {
            console.log(error);
        }
        setCity("");
    }

  return (
    <div>
        <h1 className='bg-zinc-200 border border-blue-400 w-3xs text-blue-700 text-2xl mb-2 mt-2 rounded-xs'>Search for your City</h1>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange}/>
        <br />
        <Button variant="outlined" type='submit'>Search</Button>
        {weather && <div>
            <h1>City:{weather.city}</h1>
            <h1>Temp:{weather.temp.toFixed(2)} Celsius</h1>
            <h1>Feels like:{weather.feels_like.toFixed(2)} Celsius </h1>
            <h1>Condition:{weather.condition}</h1>
            </div>}
        </form>
    </div>
  )
}

export default SearchBox
