"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("Analytics API", () => {
    it("should return engagement metrics", async () => {
        const res = await (0, supertest_1.default)(server_1.default).get("/api/analytics/engagement");
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("activeUsers");
    });
    it("should return resource usage stats", async () => {
        const res = await (0, supertest_1.default)(server_1.default).get("/api/analytics/resources");
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("mostViewed");
    });
});
