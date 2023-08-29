const asyncHandler = require("express-async-handler");
const Patient = require("../../models/nurse/PatientsModel");

const createPatientTest = asyncHandler(async (req, res) => {
  try {
    const {
      swabTestPrice,
      swabTestResult,
      TransfusionBloodType,
      TransfusionBagCount,
      TransfusionDonorName,
      pregnantUrineTest,
      kidneyDiseasesUrineTest,
      diabetesUrineTest,
      liverDiseaseUrineTest,
      urineTestPrice,
      bloodTypeTest,
      bloodPressureTest,
      whiteBloodCountTest,
      redBloodCountTest,
      bloodTestPrice,
      remark,
      patientId,
    } = req.body;
    const patient = await Patient.findById(patientId);
    const lab = await patient.labTest.push({
      swabTestPrice,
      swabTestResult,
      TransfusionBloodType,
      TransfusionBagCount,
      TransfusionDonorName,
      pregnantUrineTest,
      kidneyDiseasesUrineTest,
      diabetesUrineTest,
      liverDiseaseUrineTest,
      urineTestPrice,
      bloodTypeTest,
      bloodPressureTest,
      whiteBloodCountTest,
      redBloodCountTest,
      bloodTestPrice,
      remark
    });
    const saveLab = patient.save(lab);
    res.status(201).json({
      status: true,
      saveLab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = { createPatientTest };
