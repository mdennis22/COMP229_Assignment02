import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, loginUser } from "../controllers/users-controllers.js";

const router = express.Router();

// CREATE - localhost:5000/api/users
router.post("/", createUser);

// READs
router.get("/", getAllUsers);
router.get("/:id", getUserById);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

router.post("/login", loginUser);

export default router;
