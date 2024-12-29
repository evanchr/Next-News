"use client";

import { useState, useEffect } from "react";

export default function WeatherCarousel({ weatherData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % weatherData.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [weatherData.length]);

  if (!weatherData.length) {
    return <p>Aucune donnée météo disponible.</p>;
  }

  const currentWeather = weatherData[currentIndex];

  return (
    <div id="weather-carousel">
      <h2>WEATHER</h2>
      <p>
        {currentWeather.name}: {currentWeather.main.temp}°C,{" "}
        {currentWeather.weather[0].description}
      </p>
    </div>
  );
}
