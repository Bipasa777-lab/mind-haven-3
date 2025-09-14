"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumController = void 0;
const forum_service_1 = require("../services/forum.service");
exports.ForumController = {
    async getThreads(req, res) {
        try {
            const threads = await forum_service_1.ForumService.getAllThreads();
            res.json(threads);
        }
        catch (err) {
            res.status(500).json({ error: "Failed to fetch threads" });
        }
    },
    async getThread(req, res) {
        try {
            const thread = await forum_service_1.ForumService.getThreadById(req.params.id);
            if (!thread)
                return res.status(404).json({ error: "Thread not found" });
            res.json(thread);
        }
        catch (err) {
            res.status(500).json({ error: "Failed to fetch thread" });
        }
    },
    async createThread(req, res) {
        try {
            const { title, content, author } = req.body;
            const newThread = await forum_service_1.ForumService.createThread({ title, content, author });
            res.status(201).json(newThread);
        }
        catch (err) {
            res.status(500).json({ error: "Failed to create thread" });
        }
    },
    async addComment(req, res) {
        try {
            const { user, text } = req.body;
            const updatedThread = await forum_service_1.ForumService.addComment(req.params.id, { user, text });
            res.status(201).json(updatedThread);
        }
        catch (err) {
            res.status(500).json({ error: "Failed to add comment" });
        }
    },
};
