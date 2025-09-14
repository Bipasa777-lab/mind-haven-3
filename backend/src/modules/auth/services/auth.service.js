"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_1 = require("../../../config/auth");
const user_model_1 = __importDefault(require("../models/user.model"));
// Register user
const registerUser = async (email, password) => {
    const existingUser = await user_model_1.default.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = new user_model_1.default({ email, password: hashedPassword });
    await user.save();
    return user;
};
exports.registerUser = registerUser;
// Login user
const loginUser = async (email, password) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user)
        throw new Error("Invalid email or password");
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch)
        throw new Error("Invalid email or password");
    const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, auth_1.authConfig.jwtSecret, { expiresIn: auth_1.authConfig.jwtExpiresIn });
    return token;
};
exports.loginUser = loginUser;
