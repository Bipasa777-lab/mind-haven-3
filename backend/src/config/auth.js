"use strict";
// src/config/auth.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
exports.authConfig = {
    jwtSecret: process.env.JWT_SECRET || "supersecretkey123", // replace with strong key in .env
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d", // e.g. "1h", "7d"
    saltRounds: 10 // for bcrypt password hashing
};
