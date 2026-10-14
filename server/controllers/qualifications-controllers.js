import QualificationModel from "../models/qualifications-model.js";

export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await QualificationModel.find();
    res.status(200).json(qualifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQualificationById = async (req, res) => {
  try {
    const qualification = await QualificationModel.findById(req.params.id);
    res.status(200).json(qualification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQualification = async (req, res) => {
  try {
    const newQualification = new QualificationModel(req.body);
    const savedQualification = await newQualification.save();
    res.status(201).json(savedQualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateQualification = async (req, res) => {
  try {
    const updatedQualification = await QualificationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedQualification) {
      return res.status(404).json({ message: "Qualification not found" });
    } // is not null or undefined

    res.status(200).json(updatedQualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteQualification = async (req, res) => {
  try {
    const deleteQualification = await QualificationModel.findByIdAndDelete(req.params.id);
    if (!deleteQualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.status(200).json({ message: "Qualification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export default qualificationController;
