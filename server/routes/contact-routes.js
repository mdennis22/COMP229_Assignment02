import express from "express";
import { createContact, deleteContacts, getAllContacts, getContactsById, updateContacts } from "../controllers/contact-controllers.js";

const router = express.Router();

// CREATE - localhost:5000/api/contacts
router.post("/", createContact);

// READs
router.get("/", getAllContacts);
router.get("/:id", getContactsById);

// UPDATE
router.put("/:id", updateContacts);

// DELETE
router.delete("/:id", deleteContacts);

export default router;
