// src/config/auth.ts

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || "supersecretkey123",  // replace with strong key in .env
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",          // e.g. "1h", "7d"
  saltRounds: 10                                             // for bcrypt password hashing
};
