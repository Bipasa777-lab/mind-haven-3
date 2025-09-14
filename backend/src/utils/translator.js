"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateText = translateText;
const google_translate_api_1 = __importDefault(require("@vitalets/google-translate-api"));
async function translateText(text, lang) {
    try {
        const res = await (0, google_translate_api_1.default)(text, { to: lang });
        return res.text;
    }
    catch (err) {
        console.error("Translation error:", err);
        return text; // fallback to original
    }
}
