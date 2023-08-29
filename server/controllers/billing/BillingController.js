const asyncHandler = require("express-async-handler");
const Patient = require("../../models/nurse/PatientsModel");
const ErrorHandler = require("../../utils/ErrorHandler");

const addBilling = asyncHandler(async (req, res) => {
  try {
    const {datePaid, totalBills, patientId } = req.body;
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return next(new ErrorHandler("Patient not found", 404));
    } else {
      patient.billing.push({
        datePaid,
        totalBills,
      });
    }
    const saveBills = await patient.save();
    res.status(201).json({
      status: true,
      saveBills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = addBilling;
