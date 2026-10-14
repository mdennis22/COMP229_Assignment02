//import express from "express";
//var express = require("express");
//var app = express();
dotenv.config(); // Load environment variables from .env file
import dotenv from "dotenv";

import authMiddleware from "./server/middlewares/auth.js";
import app from "./server/express.js";
// import router from "./server/assets-router.js";
//const assetsRouter = require("./server/assets-router");
// import express from "express";
import mongoose from "mongoose";

import contactRoutes from "./server/routes/contact-routes.js";
import projectsRoutes from "./server/routes/projects-routes.js";
import usersRoutes from "./server/routes/users-routes.js";
import qualificationsRoutes from "./server/routes/qualifications-routes.js";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and create/use the 'Portfolio' database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB: Portfolio"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Welcome, this is the backend of my portfolio. Mitchell Dennis");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/contacts", contactRoutes);
app.use("/api/projects", authMiddleware, projectsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/qualifications", qualificationsRoutes);

//module.exports = app;
export default app;
