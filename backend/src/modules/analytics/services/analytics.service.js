"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTrends = getUserTrends;
exports.getScreeningStats = getScreeningStats;
const mongoose_1 = __importDefault(require("mongoose"));
// Example collections
const ChatMessage = mongoose_1.default.model("ChatMessage", new mongoose_1.default.Schema({
    sessionId: String,
    role: String,
    text: String,
    riskLabel: String,
    createdAt: { type: Date, default: Date.now },
}));
const Screening = mongoose_1.default.model("Screening", new mongoose_1.default.Schema({
    anonUserId: String,
    phq9Total: Number,
    gad7Total: Number,
    severity: String,
    createdAt: { type: Date, default: Date.now },
}));
/**
 * Get user chat trends (e.g., count of high-risk labels over time)
 */
async function getUserTrends() {
    const riskStats = await ChatMessage.aggregate([
        { $match: { riskLabel: { $exists: true } } },
        { $group: { _id: "$riskLabel", count: { $sum: 1 } } },
    ]);
    return riskStats;
}
/**
 * Get screening stats (average PHQ-9, GAD-7 scores)
 */
async function getScreeningStats() {
    const phq9Avg = await Screening.aggregate([
        { $group: { _id: null, avgPHQ9: { $avg: "$phq9Total" } } },
    ]);
    const gad7Avg = await Screening.aggregate([
        { $group: { _id: null, avgGAD7: { $avg: "$gad7Total" } } },
    ]);
    return {
        avgPHQ9: phq9Avg[0]?.avgPHQ9 || 0,
        avgGAD7: gad7Avg[0]?.avgGAD7 || 0,
    };
}
