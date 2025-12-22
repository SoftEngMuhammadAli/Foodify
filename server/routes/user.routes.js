import express from "express";
import { authorizeRoles } from "../middlewares/authorizeRoles.js";
import {
  getAllUsers,
  createNewUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authorizeRoles("admin"), getAllUsers);
router.post("/", authorizeRoles("admin"), createNewUser);
router.get("/:id", authorizeRoles("admin"), getSingleUser);
router.put("/:id", authorizeRoles("admin"), updateUser);
router.delete("/:id", authorizeRoles("admin"), deleteUser);
router.get("/profile", authorizeRoles("admin", "user"), getUserProfile);

export default router;
