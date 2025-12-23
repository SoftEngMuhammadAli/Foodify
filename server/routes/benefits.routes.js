import express from "express";
import {
  getAllBenefits,
  createBenefit,
} from "../controllers/benefits.controller.js";

import { checkAuth, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllBenefits);
router.post("/", checkAuth, authorizeRoles("admin"), createBenefit);

export default router;
