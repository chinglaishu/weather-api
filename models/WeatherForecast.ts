import mongoose from "mongoose";

const {Schema} = mongoose;

const ForecastDataDetail = {
  value: Number,
  unit: String,
};

const ForecastData = {
  forecastDate: String,
  week: String,
  forecastWind: String,
  forecastWeather: String,
  forecastMaxtemp: ForecastDataDetail,
  forecastMintemp: ForecastDataDetail,
  forecastMaxrh: ForecastDataDetail,
  forecastMinrh: ForecastDataDetail,
  ForecastIcon: Number,
};

const TempData = {
  place: String,
  value: Number,
  unit: String,
  recordTime: String,
};

const WeatherForecastSchema = new Schema({
  generalSituation: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  weatherForecast: {
    type: [ForecastData],
    required: true,
  },
  seaTemp: {
    type: TempData,
    required: true,
  },
  soilTemp: {
    type: [TempData],
    required: true,
  },
}, {timestamps: {}});

const WeatherForecast = mongoose.model("WeatherForecast", WeatherForecastSchema);

export default WeatherForecast;
