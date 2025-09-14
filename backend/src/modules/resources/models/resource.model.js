"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const mongoose_1 = require("mongoose");
const resourceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ["video", "audio", "guide"], required: true },
    url: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });
exports.Resource = (0, mongoose_1.model)("Resource", resourceSchema);
