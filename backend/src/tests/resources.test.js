"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("Resource Hub API", () => {
    it("should fetch all resources", async () => {
        const res = await (0, supertest_1.default)(server_1.default).get("/api/resources");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it("should create a new resource", async () => {
        const res = await (0, supertest_1.default)(server_1.default).post("/api/resources").send({
            title: "Mindfulness Guide",
            type: "pdf",
            url: "https://example.com/mindfulness.pdf",
        });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("_id");
    });
});
