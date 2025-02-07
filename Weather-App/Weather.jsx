import React, { useEffect,useState } from 'react'

import './weather.css'
import Search_icons  from '../assets/search.png'
import Clear_icons from '../assets/clear.png'
import Cloud_icons  from '../assets/cloud.png'
import Drizzle_icons from '../assets/drizzle.png'
import Humidity_icons from '../assets/humidity.png'
import Rain_icons from '../assets/rain.png'
import Snow_icons from '../assets/snow.png'
import Wind_icons from '../assets/wind.png'

const Weather = () => {
    const [city,setCity]=useState('');
    const [weather,setWeather] = useState({})
const searchIcon = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe2bfd3a7e2a445f55257071e63f93cc`)
   .then(response => response.json()
   ).then(result =>{setWeather(result);console.log(result)}
    );
    
   }

  return (
    <div className="weather">
        <div className="search-bar">
            <input type="text" placeholder='Search' className='weather-icon' onChange={(e)=>setCity(e.target.value)} />
            <img src={Search_icons} alt="" onClick={searchIcon}/>
        </div>
        <img src={Clear_icons} alt="" />
        <p className='temparature'>{Math.round(weather.main.temp)}℃</p>
        <p className='location'>{weather.name}</p>
        <div className="weather-data">
            <div className="col">
                <img src={Humidity_icons } alt="" />
                <div>
                    <p >{weather.main.humidity} %</p>
                    <span >Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={Wind_icons } alt="" />
                <div>
                    <p >{weather.wind.speed} km/h</p>
                    <span >Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
