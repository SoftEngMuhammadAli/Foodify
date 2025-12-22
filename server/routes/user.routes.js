import express from "express";
import { authorizeRoles, checkAuth } from "../middlewares/auth.middleware.js";
import {
  getAllUsers,
  createNewUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", checkAuth, authorizeRoles("admin"), getAllUsers);

router.post("/", checkAuth, authorizeRoles("admin"), createNewUser);

router.get("/:id", checkAuth, authorizeRoles("admin"), getSingleUser);

router.put("/:id", checkAuth, authorizeRoles("admin"), updateUser);

router.delete("/:id", checkAuth, authorizeRoles("admin"), deleteUser);

router.get(
  "/profile",
  checkAuth,
  authorizeRoles("admin", "user"),
  getUserProfile
);

export default router;
