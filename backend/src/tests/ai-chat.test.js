"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("AI Chat", () => {
    it("should start a new chat session", async () => {
        const res = await (0, supertest_1.default)(server_1.default).post("/api/ai-chat/start").send({
            message: "I feel stressed",
        });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("reply");
    });
});
