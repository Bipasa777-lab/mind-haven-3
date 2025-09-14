"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
// ✅ Import route modules
const routes_1 = __importDefault(require("./modules/booking/routes"));
const routes_2 = __importDefault(require("./modules/peer-support/routes"));
const routes_3 = __importDefault(require("./modules/auth/routes"));
const routes_4 = __importDefault(require("./modules/ai-chat/routes"));
const routes_5 = __importDefault(require("./modules/resources/routes")); // ✅ Resource Hub
const routes_6 = __importDefault(require("./modules/analytics/routes")); // ✅ Analytics Dashboard
dotenv_1.default.config();
const app = (0, express_1.default)();
// ✅ Use new port (change to 5001 if 5000 is busy)
const PORT = process.env.PORT || 5001;
app.use(express_1.default.json());
// ✅ Health check
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Backend is running 🚀" });
});
// ✅ Booking routes
app.use("/api/bookings", routes_1.default);
// ✅ Peer Support routes
app.use("/api/peer-support", routes_2.default);
// ✅ Auth routes
app.use("/api/auth", routes_3.default);
// ✅ AI Chat routes
app.use("/api/ai-chat", routes_4.default);
// ✅ Resource Hub routes
app.use("/api/resources", routes_5.default);
// ✅ Analytics routes
app.use("/api/analytics", routes_6.default);
// ✅ MongoDB connection
mongoose_1.default
    .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bookingdb")
    .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
})
    .catch((err) => console.error("❌ MongoDB connection error:", err));
