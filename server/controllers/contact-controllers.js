import ContactModel from "../models/contact-model.js";

function contactController(req, res) {
  res.send("Contact Us");
}

export const createContact = async (req, res) => {
  try {
    const newContact = new ContactModel(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContactsById = async (req, res) => {
  try {
    const contact = await ContactModel.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateContacts = async (req, res) => {
  try {
    const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    } // is not null or undefined

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Deletes Contact by ID
export const deleteContacts = async (req, res) => {
  try {
    const deleteContact = await ContactModel.findByIdAndDelete(req.params.id);
    if (!deleteContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default contactController;
