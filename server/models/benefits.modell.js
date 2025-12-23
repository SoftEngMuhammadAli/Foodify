import mongoose from "mongoose";

const benefitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // emoji or icon name
      required: true,
    },
  },
  { timestamps: true }
);

const Benefit = mongoose.model("Benefit", benefitSchema);

export default Benefit;
