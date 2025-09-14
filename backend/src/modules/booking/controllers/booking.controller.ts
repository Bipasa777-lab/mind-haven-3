// backend/booking/controllers/booking.controller.ts
import { Request, Response } from "express";
import * as svc from "../services/booking.service";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const created = await svc.createBooking(req.body);
    return res.status(201).json(created);
  } catch (err: any) {
    return res.status(400).json({ message: err.message || "Create failed" });
  }
};

export const getBookings = async (_req: Request, res: Response) => {
  try {
    const items = await svc.listBookings();
    return res.json(items);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const item = await svc.getBookingById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    return res.json(item);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const updated = await svc.updateBooking(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Not found" });
    return res.json(updated);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const deleted = await svc.deleteBooking(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    return res.json({ message: "Deleted" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
