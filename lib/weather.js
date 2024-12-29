const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function fetchWeatherData(cities) {
  try {
    const responses = await Promise.all(
      cities.map((city) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`Erreur avec la ville ${city}: ${res.status}`);
          }
          return res.json();
        })
      )
    );
    return responses;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    throw error;
  }
}
