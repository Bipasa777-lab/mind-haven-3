import request from "supertest";
import app from "../server";

describe("AI Chat", () => {
  it("should start a new chat session", async () => {
    const res = await request(app).post("/api/ai-chat/start").send({
      message: "I feel stressed",
    });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("reply");
  });
});
