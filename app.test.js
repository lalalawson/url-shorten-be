const request = require("supertest");
const app = require("./app");

describe("Test API Service", () => {
  it("GET / --> status ok", () => {
    return request(app).get("/").expect(200);
  });

  it("GET non-existing /:shortId --> return error 404, url not found", async () => {
    return request(app).get("/0").expect(404);
  });
});
