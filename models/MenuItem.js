import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema);
