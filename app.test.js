const request = require("supertest");
const app = require("./app");

describe("Test API Service", () => {
  it("GET / --> status ok", () => {
    return request(app).get("/").expect(200);
  });

  it("GET non-existing /:shortId --> return error 404, url not found", () => {
    return request(app).get("/0").expect(404);
    // .then((res) => {
    //   expect(res.body).toEqual(expect.any(String));
    // });
  });

  it("POST /shorten --> return Url object with shortUrl", () => {
    return request(app)
      .post("/shorten")
      .send({ longUrl: "https://www.facebook.com" });
  });
});
