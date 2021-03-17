import supertest from "supertest";
import app from "../../app";
import mongoose from "mongoose";
import WeatherController from "../../controller/WeatherController";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/weather-data`;
  // await mongoose.connect(url, { useNewUrlParser: true });
});

afterEach(async () => {
  // await WeatherForecast.deleteMany();
  jest.resetAllMocks();
});

afterAll(async () => {
  // await mongoose.connection.close(true);
});

jest.mock("../../controller/WeatherController", () => ({
  addForecast: jest.fn((lang: string) => {
    return {lang};
  }),
}))

describe("GET /api/weather/forecast/:lang", () => {
  const spyHandler = jest.spyOn(WeatherController, "addForecast");
  it("First get lang=en, request from api and store in db and cache", async() => {
    await supertest(app)
      .get("/api/weather/forecast/en")
      .send()
      .expect(200);
    expect(spyHandler).toHaveBeenCalledWith("en");
  });

  it("Again get lang=en, get data from cache, not call function from controller", async() => {
    await supertest(app)
      .get("/api/weather/forecast/en")
      .send()
      .expect(200);
    expect(spyHandler).toHaveBeenCalledTimes(0);
  });

  it("First get lang=tc, request from api and store in db and cache", async() => {
    await supertest(app)
      .get("/api/weather/forecast/tc")
      .send()
      .expect(200);
    expect(spyHandler).toHaveBeenCalledWith("tc");
  });
});
