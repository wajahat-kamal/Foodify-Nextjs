import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);
export default Menu;
