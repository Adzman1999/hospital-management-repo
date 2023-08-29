const asyncHandler = require("express-async-handler");
const Patient = require("../../models/nurse/PatientsModel");

const addPatientMedication = asyncHandler(async (req, res) => {
  try {
    const { medicineNAme, brand, quantity, price, patientId } = req.body;
    const patient = await Patient.findById(patientId);
    const med = await patient.prescription.push({
      medicineNAme,
      brand,
      quantity,
      price,
    });
    const saveMed = await patient.save(med);
    res.status(201).json({
      status: true,
      saveMed,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = addPatientMedication;
