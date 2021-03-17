import express from "express";
import WeatherController from "../controller/WeatherController";
import cache from "../middleware/cache";
import redisClient from "../../config/redis";

const router = express.Router();

const {weatherForecastCache} = cache;

router.get("/forecast/:lang", weatherForecastCache, async (req, res, next) => {
  try {
    const lang = req.params.lang || "en";
    const result = await WeatherController.addForecast(lang);
    redisClient.setex(lang, 30, JSON.stringify(result));
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default router;
