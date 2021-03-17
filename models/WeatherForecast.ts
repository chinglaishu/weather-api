import mongoose from "mongoose";

const {Schema} = mongoose;

const WeatherForecastSchema = new Schema({
  generalSituation: String,
  lagn: String,
  weatherForecast: [],
  seaTemp: {},
  soilTemp: []
}, {timestamps: {}});

const WeatherForecast = mongoose.model("WeatherForecast", WeatherForecastSchema);

export default WeatherForecast;
