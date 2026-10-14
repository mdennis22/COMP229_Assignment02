import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  startDate: Date,
  endDate: Date,
});

export default mongoose.model("User", userSchema);
