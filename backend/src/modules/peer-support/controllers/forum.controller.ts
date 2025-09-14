import { Request, Response } from "express";
import { ForumService } from "../services/forum.service";

export const ForumController = {
  async getThreads(req: Request, res: Response) {
    try {
      const threads = await ForumService.getAllThreads();
      res.json(threads);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch threads" });
    }
  },

  async getThread(req: Request, res: Response) {
    try {
      const thread = await ForumService.getThreadById(req.params.id);
      if (!thread) return res.status(404).json({ error: "Thread not found" });
      res.json(thread);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch thread" });
    }
  },

  async createThread(req: Request, res: Response) {
    try {
      const { title, content, author } = req.body;
      const newThread = await ForumService.createThread({ title, content, author });
      res.status(201).json(newThread);
    } catch (err) {
      res.status(500).json({ error: "Failed to create thread" });
    }
  },

  async addComment(req: Request, res: Response) {
    try {
      const { user, text } = req.body;
      const updatedThread = await ForumService.addComment(req.params.id, { user, text });
      res.status(201).json(updatedThread);
    } catch (err) {
      res.status(500).json({ error: "Failed to add comment" });
    }
  },
};
