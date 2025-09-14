"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forum_controller_1 = require("./controllers/forum.controller");
const router = (0, express_1.Router)();
// Forum routes
router.get("/threads", forum_controller_1.ForumController.getThreads);
router.get("/threads/:id", forum_controller_1.ForumController.getThread);
router.post("/threads", forum_controller_1.ForumController.createThread);
router.post("/threads/:id/comments", forum_controller_1.ForumController.addComment);
exports.default = router;
