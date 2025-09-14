import { Request, Response } from "express";
import { getUserTrends, getScreeningStats } from "../services/analytics.service";

export const getAnalyticsOverview = async (req: Request, res: Response) => {
  try {
    const trends = await getUserTrends();
    const screenings = await getScreeningStats();

    res.json({
      success: true,
      data: {
        trends,
        screenings,
      },
    });
  } catch (error) {
    console.error("Analytics Error:", error);
    res.status(500).json({ success: false, message: "Analytics fetch failed" });
  }
};
