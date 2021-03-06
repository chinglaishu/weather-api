import express from "express";
import cors from "cors";
import responseTime from "response-time";
import mongoose from "mongoose";
import routes from "./routes";
import config from "../config/config";

const dbURI = config.dbURI;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("connect to mongodb"))
  .catch((err: Error) => console.log(`fail connect to mongodb: ${err}`));

const app = express();
app.use(cors());
app.use((responseTime()));
app.use(routes);

app.listen(3000);
console.log("run server");

export default app;
