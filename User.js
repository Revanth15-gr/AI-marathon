
import mongoose from "mongoose";
export default mongoose.model("User", new mongoose.Schema({
  type: { type: String, default: "user" },
  email: String,
  password: String,
  full_name: String,
  phone: String,
  created_at: String
}));
