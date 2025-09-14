"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const resource_model_1 = require("../src/modules/resources/models/resource.model");
async function seed() {
    await mongoose_1.default.connect(process.env.MONGO_URI || "");
    await resource_model_1.Resource.create([
        {
            title: "Coping with Exam Stress",
            type: "video",
            url: "https://youtube.com/example",
        },
        {
            title: "Relaxation Audio",
            type: "audio",
            url: "https://example.com/relax.mp3",
        },
    ]);
    console.log("✅ Seed data inserted");
    process.exit(0);
}
seed();
