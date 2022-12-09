import express from "express";
import request from "supertest";

// untuk import router
import router from "./../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /url", async () => {
    const response = await request(app).get("/url");
    expect(response.body).toEqual({
        path: "/url",
        hostname: "127.0.0.1",
        protocol: "http",
        baseUrl: "",
        originalUrl: "/url",
        secure: false,
    });
});