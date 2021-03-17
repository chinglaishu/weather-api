
const config = {
  getWeatherForecastURI(lang: string) {
    return `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=${lang}`;
  },
  dbURI: "mongodb+srv://testuser:AyYTzKVAQ6pbHHN8@weather.3zse3.mongodb.net/weather-data?retryWrites=true&w=majority",
};

export default config;
