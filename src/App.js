import React, { useState } from 'react'
import axios from 'axios';
import WearherCard from './WearherCard';


function App() {
  const[city, setCity] = useState("");
  const[weather, setWeather] = useState({
    description: "",
    temp:0,
    temp_min:0,
    temp_max:0,
    humidity:0,
    sunrise:0,
    sunset:0,
    wind:0,
    country:""
  });

  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=87bb3a6d879e90e85ad6cafc8fdfc947`)
    .then((response) => 
    {
      setWeather({
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        wind: response.data.wind.speed,
        country: response.data.sys.country
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
   <>
     <div className="container text-center my-2">
       <h1>Weather App Using React Js</h1>
       <input type="text" className="from-control" value={city} onChange={
          (e) => {
            setCity(e.target.value);
          }
       }/>
       <button className="btn btn-primary mx-2" type='submit' onClick={handleClick} >Get temp</button>
         
     </div>
     <WearherCard text={weather} />
   </>
  );
}

export default App;
