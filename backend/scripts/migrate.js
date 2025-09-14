"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function migrate() {
    await mongoose_1.default.connect(process.env.MONGO_URI || "");
    // Example: Add default admin role if not exists
    const User = mongoose_1.default.model("User");
    const adminExists = await User.findOne({ role: "admin" });
    if (!adminExists) {
        await User.create({
            name: "Admin",
            email: "admin@example.com",
            password: "hashedpassword",
            role: "admin",
        });
        console.log("✅ Admin user created");
    }
    process.exit(0);
}
migrate();
