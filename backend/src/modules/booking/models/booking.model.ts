// backend/booking/models/booking.model.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  user: string;
  date: Date;
  service: string;
  status: "pending" | "confirmed" | "cancelled";
}

const BookingSchema = new Schema<IBooking>({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  status: { type: String, enum: ["pending","confirmed","cancelled"], default: "pending" }
}, { timestamps: true });

export default mongoose.model<IBooking>("Booking", BookingSchema);
