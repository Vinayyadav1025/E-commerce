import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";

const API_KEY = "1c8feef51ad077e389e8b07a53b8d016"; // Replace with your OpenWeatherMap API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const getWeatherData = () => {
    axios
      .get(API_URL, {
        params: {
          q: location,
          appid: API_KEY,
          units: "metric",
        },
      })
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="weather-app">
      <h1 style={{marginBottom:'10px'}}>Weather</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
          style={{fontSize:'22px'}}
        />
        <button onClick={getWeatherData}  style={{fontSize:'20px'}}><FaSearch /></button>
      </div>
      {weatherData && (
        <div className="weather-data" style={{ color:'white' }}>
          <h2 style={{ color:'white',marginTop:'20px' }}>{weatherData.name}</h2>
          <div className="weather-icon" style={{ color:'white',fontSize:'30px' }}>
            <TiWeatherCloudy />
          </div>
          <p style={{ color:'white' ,fontSize:'30px'}}>{weatherData.weather[0].description}</p>
          <p style={{ color:'white',fontSize:'30px' }}>Temperature: {weatherData.main.temp}°C</p>
          <p style={{ color:'white',fontSize:'30px' }}>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
