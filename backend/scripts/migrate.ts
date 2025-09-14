import mongoose from "mongoose";

async function migrate() {
  await mongoose.connect(process.env.MONGO_URI || "");

  // Example: Add default admin role if not exists
  const User = mongoose.model("User");
  const adminExists = await User.findOne({ role: "admin" });
  if (!adminExists) {
    await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: "hashedpassword",
      role: "admin",
    });
    console.log("✅ Admin user created");
  }

  process.exit(0);
}

migrate();
