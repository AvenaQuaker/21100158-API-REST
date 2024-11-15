const request = require("supertest");
const app = require("../app.js");

describe("GET /api/test", () => {
    it("should return a message", async () => {
        const response = await request(app).get("/api/test");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Hello, world!");
    });
});
