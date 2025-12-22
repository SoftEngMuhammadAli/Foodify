import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [100, "Name must be at most 100 characters long"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [1000, "Description must be at most 1000 characters long"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be at least 0"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: [3, "Category must be at least 3 characters long"],
      maxlength: [30, "Category must be at most 30 characters long"],
    },
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
    image: {
      type: String,
      required: true,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

/* ========== INDEXES ========== */
productSchema.index({ name: "text", category: "text" });

const Product = mongoose.model("Product", productSchema);
export default Product;
