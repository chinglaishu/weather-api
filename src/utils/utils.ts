import config from "../../config/config";
import axios from "axios";

const getWeatherForecastData = async (lang: string) => {
  const weatherForecastURI = config.getWeatherForecastURI(lang);
  const result = await axios.get(weatherForecastURI);
  return result.data;
};

export default {getWeatherForecastData};
