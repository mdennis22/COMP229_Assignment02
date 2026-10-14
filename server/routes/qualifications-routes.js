import express from "express";
import {
  createQualification,
  deleteQualification,
  getAllQualifications,
  getQualificationById,
  updateQualification,
} from "../controllers/qualifications-controllers.js";

const router = express.Router();

// CREATE - localhost:5000/api/qualifications
router.post("/", createQualification);

// READs
router.get("/", getAllQualifications);
router.get("/:id", getQualificationById);

// UPDATE
router.put("/:id", updateQualification);

// DELETE
router.delete("/:id", deleteQualification);

export default router;
