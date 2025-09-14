import request from "supertest";
import app from "../server";

describe("Resource Hub API", () => {
  it("should fetch all resources", async () => {
    const res = await request(app).get("/api/resources");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new resource", async () => {
    const res = await request(app).post("/api/resources").send({
      title: "Mindfulness Guide",
      type: "pdf",
      url: "https://example.com/mindfulness.pdf",
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });
});
