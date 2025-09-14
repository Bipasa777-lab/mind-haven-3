"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = sendSMS;
const twilio_1 = __importDefault(require("twilio"));
const client = (0, twilio_1.default)(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
async function sendSMS(to, message) {
    await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE,
        to,
    });
    console.log(`📱 SMS sent to ${to}`);
}
