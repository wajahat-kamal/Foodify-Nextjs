// models/MenuItem.js
const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Main Course", "Fast Food", "Pasta & Italian", "Desserts"],
      default: "Main Course",
    },
    price: {
      type: String,
      required: true,
      trim: true,
      // store price as string with currency symbol OR store as number + currency (below)
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.MenuItem || mongoose.model("MenuItem", MenuItemSchema);
