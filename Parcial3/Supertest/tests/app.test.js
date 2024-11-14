const request = require("supertest");
const app = require("../app");

describe("GET /api/test", () => {
    it("Deberia Regresarme algo", async () => {
        const response = await request(app).get("/api/test");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Jest > Chai");
    });
});
