"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyticsOverview = void 0;
const analytics_service_1 = require("../services/analytics.service");
const getAnalyticsOverview = async (req, res) => {
    try {
        const trends = await (0, analytics_service_1.getUserTrends)();
        const screenings = await (0, analytics_service_1.getScreeningStats)();
        res.json({
            success: true,
            data: {
                trends,
                screenings,
            },
        });
    }
    catch (error) {
        console.error("Analytics Error:", error);
        res.status(500).json({ success: false, message: "Analytics fetch failed" });
    }
};
exports.getAnalyticsOverview = getAnalyticsOverview;
