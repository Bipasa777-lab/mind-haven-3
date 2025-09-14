"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumService = void 0;
const forum_model_1 = require("../models/forum.model");
exports.ForumService = {
    async getAllThreads() {
        return await forum_model_1.Thread.find().sort({ createdAt: -1 });
    },
    async getThreadById(id) {
        return await forum_model_1.Thread.findById(id);
    },
    async createThread(data) {
        const thread = new forum_model_1.Thread(data);
        return await thread.save();
    },
    async addComment(threadId, comment) {
        const thread = await forum_model_1.Thread.findById(threadId);
        if (!thread)
            throw new Error("Thread not found");
        thread.comments.push(comment);
        return await thread.save();
    },
};
