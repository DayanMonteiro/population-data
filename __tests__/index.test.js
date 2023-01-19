/* eslint-disable node/no-unpublished-require */
const request = require("supertest");

describe("App Endpoints", () => {
  it("should list neighborhoods sucessfully", async () => {
    const neighborhoodsResponse = await request(
      "https://63bf4f31a177ed68abaefca0.mockapi.io"
    ).get("/neighborhoods");

    expect(neighborhoodsResponse.statusCode).toEqual(200);
  });

  it("should neighborhoods get return an array", async () => {
    const neighborhoodsResponse = await request(
      "https://63bf4f31a177ed68abaefca0.mockapi.io"
    ).get("/neighborhoods");

    expect(Array.isArray(neighborhoodsResponse.body)).toBe(true);
  });

  it("should list population sucessfully", async () => {
    const populationResponse = await request(
      "https://63bf4f31a177ed68abaefca0.mockapi.io"
    ).get("/population");

    expect(populationResponse.statusCode).toEqual(200);
  });

  it("should population get return an array", async () => {
    const populationResponse = await request(
      "https://63bf4f31a177ed68abaefca0.mockapi.io"
    ).get("/population");

    expect(Array.isArray(populationResponse.body)).toBe(true);
  });
});
