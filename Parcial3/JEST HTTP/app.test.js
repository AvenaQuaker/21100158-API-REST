import request from "supertest";
import app from "./app"; // Asegúrate de que la ruta del archivo sea correcta

describe("GET /api/test", () => {
    it("should return a message", async () => {
        const response = await request(app).get("/api/test");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Hello, world!");
    });
});
