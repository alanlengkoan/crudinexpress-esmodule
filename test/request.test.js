import express from "express";
import request from "supertest";

// untuk import router
import router from "./../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /hai", async () => {
    const response = await request(app).get("/hai");
    expect(response.text).toBe("Hai");
});
