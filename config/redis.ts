import redis from "redis";

const redisPort = 6379;
const redisClient = redis.createClient(redisPort);

export default redisClient;
