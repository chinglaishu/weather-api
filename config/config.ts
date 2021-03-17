
const dbUser = `testuser`;
// should be in process.env
const dbPassword = `AyYTzKVAQ6pbHHN8`;

const config: any = {
  getWeatherForecastURI(lang: string) {
    return `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=${lang}`;
  },
  dbURI: `mongodb+srv://${dbUser}:${dbPassword}@weather.3zse3.mongodb.net/weather-data?retryWrites=true&w=majority`,
};

export default config;
