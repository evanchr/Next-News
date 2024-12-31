"use client";

import { useState, useEffect } from "react";

export default function WeatherCarousel({ weatherData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % weatherData.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, [weatherData.length]);

  if (!weatherData.length) {
    return <p>Weather data unavailable.</p>;
  }

  const currentWeather = weatherData[currentIndex];

  return (
    <div id="weather-carousel">
      <p>
        Weather :{" "}
        {currentWeather.name}, {Math.round(currentWeather.main.temp)}°C{" - "}
        {currentWeather.weather[0].description}.
      </p>
    </div>
  );
}
