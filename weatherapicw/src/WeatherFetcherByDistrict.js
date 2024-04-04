import React, { useState } from 'react';
import './App.css';
import WeatherDataDisplayByDistrict from './WeatherDataDisplayByDistrict'; // Import WeatherDataDisplayByDistrict component

const WeatherFetcherByDistrict = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchDataByDistrict = () => {
    const districtInput = prompt('Enter the district:');
    if (districtInput) {
      fetch(`https://weatherapinodejsbackendcw.onrender.com/api/Weather/byDistrict/${districtInput}`)
        .then(response => response.json())
        .then(data => setWeatherData(data.data))
        .catch(error => console.error('Error fetching weather data by district:', error));
    }
  };

  return (
    <div>
      <button className='button-86' onClick={fetchDataByDistrict}>Fetch by District</button>
      <WeatherDataDisplayByDistrict weatherData={weatherData} />
    </div>
  );
};

export default WeatherFetcherByDistrict;
