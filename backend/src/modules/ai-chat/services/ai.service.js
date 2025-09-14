"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAI = void 0;
const axios_1 = __importDefault(require("axios"));
const PYTHON_AI_URL = "http://localhost:8000/chat";
const callAI = async (text, modelName) => {
    const response = await axios_1.default.post(PYTHON_AI_URL, { text, modelName });
    return response.data;
};
exports.callAI = callAI;
