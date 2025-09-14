import jwt, { SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { authConfig } from "../../../config/auth";
import User, { IUser } from "../models/user.model";

// Register user
export const registerUser = async (email: string, password: string): Promise<IUser> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  return user;
};

// Login user
export const loginUser = async (email: string, password: string): Promise<string> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { id: user._id, email: user.email },
    authConfig.jwtSecret as string,
    { expiresIn: authConfig.jwtExpiresIn } as SignOptions
  );

  return token;
};
