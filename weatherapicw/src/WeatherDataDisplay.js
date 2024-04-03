import React from 'react';

const WeatherDataDisplay = ({ weatherData }) => {
  return (
    <div>
      <h1>Weather Data</h1>
      {weatherData.map(data => (
        <div key={data._id}>
          <h2>{data._district}</h2>
          <p>Temperature: {data._temperature}°C</p>
          <p>Humidity: {data._humidity}%</p>
          <p>Air Pressure: {data._airPressure} hPa</p>
          <p>Last Updated: {data._lastUpdatedDateTime}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDataDisplay;