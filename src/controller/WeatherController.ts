import WeatherForecast from "../../models/WeatherForecast";
import utils from "../utils/utils";

const WeatherController = {
  async addForecast(lang: string) {
    const weatherForecastData = await utils.getWeatherForecastData(lang);
    const storeData = {lang, ...weatherForecastData};
    const weatherForecast = new WeatherForecast(storeData);
    return await weatherForecast.save();
  },
}

export default WeatherController;
