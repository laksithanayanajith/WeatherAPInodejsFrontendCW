import React, { useState, useEffect } from 'react';
import WeatherDataDisplay from './WeatherDataDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch weather data from your API
    fetch('api/weather')
      .then(response => response.json())
      .then(data => setWeatherData(data.data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div>
      <WeatherDataDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
