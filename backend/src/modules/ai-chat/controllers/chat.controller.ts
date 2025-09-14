import { Request, Response } from "express";
import { callAI } from "../services/ai.service";

export const chatHandler = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const response = await callAI(text);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI service error" });
  }
};
