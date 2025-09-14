"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatHandler = void 0;
const ai_service_1 = require("../services/ai.service");
const chatHandler = async (req, res) => {
    try {
        const { text, modelName } = req.body;
        const response = await (0, ai_service_1.callAI)(text, modelName);
        res.json(response);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "AI service error" });
    }
};
exports.chatHandler = chatHandler;
