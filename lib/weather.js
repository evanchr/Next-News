const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const cache = new Map();

const CACHE_EXPIRATION_TIME = 10 * 60 * 1000;

export async function fetchWeatherData(cities) {
  const now = Date.now();

  const citiesWithWeather = await Promise.all(
    cities.map(async (city) => {
      if (cache.has(city)) {
        const { data, timestamp } = cache.get(city);

        if (now - timestamp < CACHE_EXPIRATION_TIME) {
          console.log(`Données de ${city} récupérées depuis le cache.`);
          return data;
        } else {
          console.log(`Cache expiré pour ${city}, rechargement des données.`);
        }
      }

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!res.ok) {
          throw new Error(`Erreur avec la ville ${city}: ${res.status}`);
        }

        const data = await res.json();

        cache.set(city, { data, timestamp: Date.now() });

        return data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données météo :", error);
        throw error;
      }
    })
  );

  return citiesWithWeather;
}
