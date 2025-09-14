import { Router } from "express";
import { getAnalyticsOverview } from "./controllers/analytics.controller";

const router = Router();

// GET /api/analytics
router.get("/", getAnalyticsOverview);

export default router;
