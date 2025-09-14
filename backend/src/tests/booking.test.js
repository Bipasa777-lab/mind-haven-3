"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("Booking", () => {
    it("should create a new booking", async () => {
        const res = await (0, supertest_1.default)(server_1.default).post("/api/bookings").send({
            studentId: "12345",
            counsellorId: "c001",
            date: "2025-09-20",
        });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("bookingId");
    });
});
