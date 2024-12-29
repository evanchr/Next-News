import Link from "next/link";
import NavLink from "./nav-link";
import WeatherCarousel from "./weather-carousel";
import { fetchWeatherData } from "../lib/weather";

export default async function MainHeader() {
  const cities = ["Paris", "London", "New York", "Tokyo", "Berlin"];
  let weatherData = [];

  try {
    weatherData = await fetchWeatherData(cities);
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
  }

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <WeatherCarousel weatherData={weatherData} />
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
