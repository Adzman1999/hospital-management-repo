const express = require("express");
const {
  addAttachmentFile,
  createPatient,
  updatePatientBasicInfo,
  updateToDischargePatient,
  fetchAllPatients,
  createOPDPatient,
  updateOPDPatient,
  addNurseRemark,
  addDoctorPrescription,
  addDoctorFee,
  searchPatient,
} = require("../../controllers/nurse/PatientsController");
const addBilling = require("../../controllers/billing/BillingController");
// const protect = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/create").post(createPatient);
router.route("/opd").post(createOPDPatient);
router.route("/update-basic-info").put(updatePatientBasicInfo);
router.route("/update-to-discharge").put(updateToDischargePatient);
router.route("/update-opd").put(updateOPDPatient);
router.route("/").get(fetchAllPatients);
router.route("/billing/create").post(addBilling);
router.route("/remark/create").post(addNurseRemark);
router.route("/prescription/create").post(addDoctorPrescription);
router.route("/doctor-fee/create").post(addDoctorFee);
router.route("/attachment/create").post(addAttachmentFile);
router.route("/keyword").get(searchPatient);

module.exports = router;
