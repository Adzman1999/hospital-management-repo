const mongoose = require("mongoose");

const patientTestModel = mongoose.Schema(
  {
    age: String,
    sex: String,
    typeOfAdmission: String,
    admission: String,
    attendingPhysician: String,
    address: String,
    contact: String,
    patientName: String,
    swabTest: String,
    bloodTransfusion: {
      bloodType: {
        type: String,
        default: "N/A",
      },
      bagCount: {
        type: String,
        default: "N/A",
      },
      donorName: {
        type: String,
        default: "N/A",
      },
    },
    urineTest: {
      pregnant: String,
      kidneyDiseases: String,
      diabetes: String,
      liverDisease: String,
    },
    bloodTest: {
      bloodType: String,
      bloodPressure: String,
      bloodCount: {
        white: String,
        red: String,
      },
    },
  },
  { timestamps: true }
);

const PatientTest = mongoose.model("patient_test", patientTestModel);

module.exports = PatientTest;
