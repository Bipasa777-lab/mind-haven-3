import mongoose from "mongoose";
import { Resource } from "../src/modules/resources/models/resource.model";

async function seed() {
  await mongoose.connect(process.env.MONGO_URI || "");

  await Resource.create([
    {
      title: "Coping with Exam Stress",
      type: "video",
      url: "https://youtube.com/example",
    },
    {
      title: "Relaxation Audio",
      type: "audio",
      url: "https://example.com/relax.mp3",
    },
  ]);

  console.log("✅ Seed data inserted");
  process.exit(0);
}

seed();
