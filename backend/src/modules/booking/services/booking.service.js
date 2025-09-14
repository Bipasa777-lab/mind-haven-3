"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.getBookingById = exports.listBookings = exports.createBooking = void 0;
// backend/booking/services/booking.service.ts
const booking_model_1 = __importDefault(require("../models/booking.model"));
const createBooking = (data) => new booking_model_1.default(data).save();
exports.createBooking = createBooking;
const listBookings = () => booking_model_1.default.find().sort({ createdAt: -1 });
exports.listBookings = listBookings;
const getBookingById = (id) => booking_model_1.default.findById(id);
exports.getBookingById = getBookingById;
const updateBooking = (id, data) => booking_model_1.default.findByIdAndUpdate(id, data, { new: true });
exports.updateBooking = updateBooking;
const deleteBooking = (id) => booking_model_1.default.findByIdAndDelete(id);
exports.deleteBooking = deleteBooking;
