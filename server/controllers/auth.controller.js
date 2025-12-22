import { catchAsyncHandler } from "../middlewares/catchAsyncHandler.js";
import User from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* ================= REGISTER ================= */
export const registerUser = catchAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // generate token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(201).json({
    message: "User registered successfully",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

/* ================= LOGIN ================= */
export const loginUser = catchAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find user & include password
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // compare password using schema method
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // generate JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

/* ================= LOGOUT ================= */
export const logoutUser = catchAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User logged out successfully",
  });
});

/* ================= REFRESH TOKEN ================= */
export const refreshToken = catchAsyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  // check refresh token
  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }

  // verify refresh token
  const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

  // generate new token
  const token = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(200).json({
    message: "Refresh token successful",
    token,
  });
});
