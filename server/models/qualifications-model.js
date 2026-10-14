import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
});

export default mongoose.model("Qualification", qualificationSchema);
