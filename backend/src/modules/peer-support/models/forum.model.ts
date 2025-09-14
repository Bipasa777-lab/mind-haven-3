import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  user: string;
  text: string;
  createdAt: Date;
}

export interface IThread extends Document {
  title: string;
  content: string;
  author: string;
  comments: IComment[];
  createdAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    user: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const ThreadSchema = new Schema<IThread>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

export const Thread = mongoose.model<IThread>("Thread", ThreadSchema);
