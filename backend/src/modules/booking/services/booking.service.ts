// backend/booking/services/booking.service.ts
import Booking, { IBooking } from "../models/booking.model";

export const createBooking = (data: Partial<IBooking>) => new Booking(data).save();
export const listBookings = () => Booking.find().sort({ createdAt: -1 });
export const getBookingById = (id: string) => Booking.findById(id);
export const updateBooking = (id: string, data: Partial<IBooking>) =>
  Booking.findByIdAndUpdate(id, data, { new: true });
export const deleteBooking = (id: string) => Booking.findByIdAndDelete(id);
