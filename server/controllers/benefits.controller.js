import Benefit from "../models/benefits.modell.js";
import { catchAsyncHandler } from "../utils/catchAsyncHandler.js";

// GET all benefits
export const getAllBenefits = catchAsyncHandler(async (req, res) => {
  try {
    const benefits = await Benefit.find();

    if (!benefits) {
      return res.status(404).json({
        success: false,
        message: "No benefits found",
      });
    }

    return res.status(200).json({
      success: true,
      count: benefits.length,
      data: benefits,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch benefits",
    });
  }
});

// CREATE benefit (admin)
export const createBenefit = catchAsyncHandler(async (req, res) => {
  try {
    const benefit = await Benefit.create(req.body);

    if (!benefit) {
      return res.status(400).json({
        success: false,
        message: "Failed to create benefit",
      });
    }

    return res.status(201).json({
      success: true,
      data: benefit,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to create benefit",
    });
  }
});
