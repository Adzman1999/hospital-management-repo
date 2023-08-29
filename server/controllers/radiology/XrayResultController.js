const asyncHandler = require("express-async-handler");
const Patient = require("../../models/nurse/PatientsModel");
const ErrorHandler = require("../../utils/ErrorHandler");

const createXrayResult = asyncHandler(async (req, res) => {
  try {
    const { details, image, patientId } = req.body;
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return next(new ErrorHandler("Patient not found", 404));
    } else {
      patient.xray_result.push({
        details,
        image,
      });
    }

    const saveRad = await patient.save();
    res.status(201).json({
      status: true,
      saveRad,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const addPatientXrayPrice = asyncHandler(async (req, res) => {
  try {
    const { xrayPrice, patientId } = req.body;
    const patientXrayPrice = await Patient.findOneAndUpdate(
      { _id: patientId },
      {
        $set: {
          xrayPrice,
        },
      }
    );
    const savePatientXrayPrice = await patientXrayPrice.save();
    res.status(201).json({
      status: true,
      savePatientXrayPrice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = { createXrayResult, addPatientXrayPrice };
