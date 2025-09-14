import request from "supertest";
import app from "../server";

describe("Analytics API", () => {
  it("should return engagement metrics", async () => {
    const res = await request(app).get("/api/analytics/engagement");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("activeUsers");
  });

  it("should return resource usage stats", async () => {
    const res = await request(app).get("/api/analytics/resources");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("mostViewed");
  });
});

