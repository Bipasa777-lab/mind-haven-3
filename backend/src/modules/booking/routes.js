"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/booking/routes.ts
const express_1 = require("express");
const booking_controller_1 = require("./controllers/booking.controller");
const router = (0, express_1.Router)();
router.post("/", booking_controller_1.createBooking); // POST /api/bookings
router.get("/", booking_controller_1.getBookings); // GET  /api/bookings
router.get("/:id", booking_controller_1.getBookingById); // GET  /api/bookings/:id
router.put("/:id", booking_controller_1.updateBooking); // PUT  /api/bookings/:id
router.delete("/:id", booking_controller_1.deleteBooking); // DELETE /api/bookings/:id
exports.default = router;
