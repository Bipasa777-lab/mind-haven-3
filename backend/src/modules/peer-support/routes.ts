import { Router } from "express";
import { ForumController } from "./controllers/forum.controller";

const router = Router();

// Forum routes
router.get("/threads", ForumController.getThreads);
router.get("/threads/:id", ForumController.getThread);
router.post("/threads", ForumController.createThread);
router.post("/threads/:id/comments", ForumController.addComment);

export default router;
