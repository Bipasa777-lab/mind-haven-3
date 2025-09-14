import request from "supertest";
import app from "../server";

describe("Booking", () => {
  it("should create a new booking", async () => {
    const res = await request(app).post("/api/bookings").send({
      studentId: "12345",
      counsellorId: "c001",
      date: "2025-09-20",
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("bookingId");
  });
});
