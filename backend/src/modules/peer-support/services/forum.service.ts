import { Thread } from "../models/forum.model";

export const ForumService = {
  async getAllThreads() {
    return await Thread.find().sort({ createdAt: -1 });
  },

  async getThreadById(id: string) {
    return await Thread.findById(id);
  },

  async createThread(data: { title: string; content: string; author: string }) {
    const thread = new Thread(data);
    return await thread.save();
  },

  async addComment(threadId: string, comment: { user: string; text: string }) {
    const thread = await Thread.findById(threadId);
    if (!thread) throw new Error("Thread not found");

    thread.comments.push(comment as any);
    return await thread.save();
  },
};
