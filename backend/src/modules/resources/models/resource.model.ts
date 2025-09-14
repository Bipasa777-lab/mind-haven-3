import { Schema, model, Document } from "mongoose";

export interface IResource extends Document {
  title: string;
  type: "video" | "audio" | "guide";
  url: string;
  description?: string;
  createdAt: Date;
}

const resourceSchema = new Schema<IResource>(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["video", "audio", "guide"], required: true },
    url: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

export const Resource = model<IResource>("Resource", resourceSchema);
