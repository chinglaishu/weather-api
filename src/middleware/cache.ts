import {Request, Response, NextFunction} from "express";
import redisClient from "../../config/redis";
import moment from "moment";

const weatherForecastCache = (req: Request, res: Response, next: NextFunction) => {
  const lang = req.params.lang || "en";
  redisClient.get(lang, (err, data) => {
    if (err) {return res.status(500).send(err); }
    if (data) {
      const parseData = JSON.parse(data);
      if (isCacheValid(parseData.createdAt, 30)) {
        return res.status(200).send(parseData);
      }
    }
    next();
  });
};

const isCacheValid = (timestamp: string, expireSecond: number) => {
  return moment().diff(moment(timestamp), "seconds") < expireSecond;
};

export default {weatherForecastCache};
