// backend/booking/routes.ts
import { Router } from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} from "./controllers/booking.controller";

const router = Router();

router.post("/", createBooking);         // POST /api/bookings
router.get("/", getBookings);            // GET  /api/bookings
router.get("/:id", getBookingById);      // GET  /api/bookings/:id
router.put("/:id", updateBooking);       // PUT  /api/bookings/:id
router.delete("/:id", deleteBooking);    // DELETE /api/bookings/:id

export default router;
