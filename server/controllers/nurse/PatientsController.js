const asyncHandler = require("express-async-handler");
const Patients = require("../../models/nurse/PatientsModel");

const createPatient = asyncHandler(async (req, res) => {
  try {
    const {
      lastName,
      firstName,
      middleName,
      roomNumber,
      roomType,
      roomPrice,
      roomName,
      permanentAddress,
      contact,
      sex,
      civilStatus,
      birthdate,
      age,
      birthplace,
      nationality,
      religion,
      occupation,
      fatherName,
      fatherAddress,
      fatherContact,
      motherName,
      motherAddress,
      motherContact,
      admission,
      healthInsurance,
      sponsorName,
      hosPlan,
    } = req.body;
    console.log(req.body);

    const newPatient = new Patients({
      lastName,
      firstName,
      middleName,
      roomNumber,
      roomType,
      roomPrice,
      roomName,
      permanentAddress,
      contact,
      sex,
      civilStatus,
      birthdate,
      age,
      birthplace,
      nationality,
      religion,
      occupation,
      fatherName,
      fatherAddress,
      fatherContact,
      motherName,
      motherAddress,
      motherContact,
      admission,
      healthInsurance,
      sponsorName,
      hosPlan,
    });
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json(error);
  }
});

const createOPDPatient = asyncHandler(async (req, res) => {
  try {
    const {
      formerOPD,
      lastName,
      firstName,
      middleName,
      permanentAddress,
      contact,
      sex,
      civilStatus,
      birthdate,
      age,
      birthplace,
      nationality,
      religion,
      occupation,
      fatherName,
      fatherAddress,
      fatherContact,
      motherName,
      motherAddress,
      motherContact,
      hosPlan,
      healthInsurance,
      sponsorName,
    } = req.body;
    console.log(req.body);

    const newPatient = new Patients({
      formerOPD,
      lastName,
      firstName,
      middleName,
      permanentAddress,
      contact,
      sex,
      civilStatus,
      birthdate,
      age,
      birthplace,
      nationality,
      religion,
      occupation,
      fatherName,
      fatherAddress,
      fatherContact,
      motherName,
      motherAddress,
      motherContact,
      hosPlan,
      healthInsurance,
      sponsorName,
    });

    const savedPatient = await newPatient.save();

    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json(error);
  }
});

const updatePatientBasicInfo = asyncHandler(async (req, res) => {
  const {
    id,
    lastName,
    firstName,
    middleName,
    roomNumber,
    roomType,
    roomPrice,
    roomName,
    permanentAddress,
    contact,
    sex,
    civilStatus,
    birthdate,
    age,
    birthplace,
    nationality,
    religion,
    occupation,
    fatherName,
    fatherAddress,
    fatherContact,
    motherName,
    motherAddress,
    motherContact,
    admission,
    healthInsurance,
    sponsorName,
    hosPlan,
  } = req.body;
  const updatedPatient = await Patients.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        lastName,
        firstName,
        middleName,
        roomNumber,
        roomType,
        roomPrice,
        roomName,
        permanentAddress,
        contact,
        sex,
        civilStatus,
        birthdate,
        age,
        birthplace,
        nationality,
        religion,
        occupation,
        fatherName,
        fatherAddress,
        fatherContact,
        motherName,
        motherAddress,
        motherContact,
        admission,
        healthInsurance,
        sponsorName,
        hosPlan,
      },
    }
  );

  if (!updatedPatient) {
    res.status(404);
    throw new Error("Patient Not Found");
  } else {
    res.json(updatedPatient);
  }
});

const updateToDischargePatient = asyncHandler(async (req, res) => {
  const {
    id,
    discharge,
    totalNoDays,
    admissionDiagnosis,
    finalDiagnosis,
    otherDiagnosis,
    disposition,
    results,
  } = req.body;
  const updatedToDischargePatient = await Patients.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        discharge,
        totalNoDays,
        admissionDiagnosis,
        finalDiagnosis,
        otherDiagnosis,
        disposition,
        results,
      },
    }
  );

  if (!updatedToDischargePatient) {
    res.status(404);
    throw new Error("Patient Not Found");
  } else {
    res.json(updatedToDischargePatient);
  }
});

const updateOPDPatient = asyncHandler(async (req, res) => {
  const {
    id,
    lastName,
    firstName,
    middleName,
    permanentAddress,
    contact,
    sex,
    civilStatus,
    birthdate,
    age,
    birthplace,
    nationality,
    religion,
    occupation,
    fatherName,
    fatherAddress,
    fatherContact,
    motherName,
    motherAddress,
    motherContact,
    hosPlan,
    healthInsurance,
    sponsorName,
  } = req.body;
  const updatedToDischargePatient = await Patients.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        lastName,
        firstName,
        middleName,
        permanentAddress,
        contact,
        sex,
        civilStatus,
        birthdate,
        age,
        birthplace,
        nationality,
        religion,
        occupation,
        fatherName,
        fatherAddress,
        fatherContact,
        motherName,
        motherAddress,
        motherContact,
        hosPlan,
        healthInsurance,
        sponsorName,
      },
    }
  );

  if (!updatedToDischargePatient) {
    res.status(404);
    throw new Error("Patient Not Found");
  } else {
    res.json(updatedToDischargePatient);
  }
});

const fetchAllPatients = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const patients = await Patients.find(keyword);
  res.status(200).json(patients.reverse());
});

const addNurseRemark = asyncHandler(async (req, res) => {
  try {
    const {
      remark,
      nurse,
      remarkDate,
      remarkTime,
      patientId,
    } = req.body;
    const patient = await Patients.findById(patientId);
    await patient.nurseRemark.push({
      remark,
      nurse,
      remarkDate,
      remarkTime
    });
    patient.save();
    res.status(201).json({
      status: true,
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const addDoctorPrescription = asyncHandler(async (req, res) => {
  try {
    const {
      attendingPhysician,
      medicine,
      qty,
      hrsPerIntake,
      prescribeDate,
      prescribeTime,
      patientId,
    } = req.body;
    const patient = await Patients.findById(patientId);
    await patient.doctorPrescription.push({
      attendingPhysician,
      medicine,
      qty,
      hrsPerIntake,
      prescribeDate,
      prescribeTime,
    });
    patient.save();
    res.status(201).json({
      status: true,
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const addDoctorFee = asyncHandler(async (req, res) => {
  try {
    const {
      attendingPhysician,
      consultationFee,
      department,
      specialist,
      feeDate,
      feeTime,
      patientId,
    } = req.body;
    const patient = await Patients.findById(patientId);
    await patient.doctorFee.push({
      attendingPhysician,
      consultationFee,
      department,
      specialist,
      feeDate,
      feeTime,
    });
    patient.save();
    res.status(201).json({
      status: true,
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const searchPatient = asyncHandler(async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { firstName: { $regex: req.query.search, $options: "i" } },
            { middleName: { $regex: req.query.search, $options: "i" } },
            { lastName: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const name = await Patients.find(keyword);
    res.send(name);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

const addAttachmentFile = asyncHandler(async (req, res) => {
  try {
    const {
      file,
      fileName,
      date,
      patientId,
    } = req.body;
    const patient = await Patients.findById(patientId);
    await patient.attachment.push({
      file,
      fileName,
      date,
    });
    patient.save();
    res.status(201).json({
      status: true,
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = {
  addAttachmentFile,
  createPatient,
  fetchAllPatients,
  updatePatientBasicInfo,
  updateToDischargePatient,
  createOPDPatient,
  updateOPDPatient,
  addNurseRemark,
  addDoctorPrescription,
  addDoctorFee,
  searchPatient,
};


