import express from "express";
import weather from "./weather";

const router = express.Router();

router.use("/api/weather", weather);

export default router;
