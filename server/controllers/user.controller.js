import User from "../models/auth.model.js";
import { catchAsyncHandler } from "../middlewares/catchAsyncHandler.js";

export const getAllUsers = catchAsyncHandler(async (req, res) => {
  const users = await User.find({});

  if (!users || users.length === 0) {
    return res.status(404).json({ message: "Users not found" });
  }

  return res.status(200).json({
    message: "Users fetched successfully",
    users,
  });
});

export const createNewUser = catchAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.create({ name, email, password });

  if (!user) {
    return res.status(400).json({ message: "User not created" });
  }

  return res.status(201).json({
    message: "User created successfully",
    user,
  });
});

export const getSingleUser = catchAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({
    message: "User fetched successfully",
    user,
  });
});

export const updateUser = catchAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const user = await User.findByIdAndUpdate(id, { name, email, password });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({
    message: "User updated successfully",
    user,
  });
});

export const deleteUser = catchAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({
    message: "User deleted successfully",
    user,
  });
});

export const getUserProfile = catchAsyncHandler(async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({
    message: "User fetched successfully",
    user,
  });
});
