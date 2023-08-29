const mongoose = require("mongoose");

const patientsModel = mongoose.Schema(
  {
    labTest: [
      {
        swabTestPrice: Number,
        swabTestResult: String,
        TransfusionBloodType: String,
        TransfusionBagCount: Number,
        TransfusionDonorName: String,
        pregnantUrineTest: String,
        kidneyDiseasesUrineTest: String,
        diabetesUrineTest: String,
        liverDiseaseUrineTest: String,
        urineTestPrice: Number,
        bloodTypeTest: String,
        bloodPressureTest: String,
        whiteBloodCountTest: Number,
        redBloodCountTest: Number,
        bloodTestPrice: Number,
        date: {
          type: Date,
          default: Date.now(),
        },
        remark: String,
      },
    ],
    lastName: String,
    firstName: String,
    middleName: String,
    roomNumber: Number,
    roomType: String,
    roomPrice: Number,
    roomName: String,
    permanentAddress: String,
    contact: String,
    sex: String,
    civilStatus: String,
    birthdate: String,
    age: String,
    birthplace: String,
    nationality: String,
    religion: String,
    occupation: String,
    fatherName: String,
    fatherAddress: String,
    fatherContact: String,
    motherName: String,
    motherAddress: String,
    motherContact: String,
    billing: [
      {
        datePaid: String,
        totalBills: Number,
      },
    ],
    admission: {
      date: String,
      time: String,
    },
    discharge: {
      date: String,
      time: String,
    },
    totalNoDays: Number,
    healthInsurance: String,
    sponsorName: String,
    hosPlan: String,
    admissionDiagnosis: String,
    finalDiagnosis: String,
    otherDiagnosis: String,
    disposition: String,
    results: String,
    prescription: [
      {
        medicineNAme: String,
        brand: String,
        quantity: Number,
        price: Number,
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    formerOPD: {
      type: Boolean,
      default: false,
    },
    xrayPrice: Number,
    xray_result: [
      {
        details: String,
        image: String,
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    nurseRemark: [
      {
        remark: String,
        nurse: String,
        remarkDate: String,
        remarkTime: String
      }
    ],
    doctorPrescription: [
      {
        attendingPhysician: String,
        medicine: String,
        qty: Number,
        hrsPerIntake: String,
        prescribeDate: String,
        prescribeTime: String
      }
    ],
    doctorFee: [
      {
        attendingPhysician: String,
        consultationFee: Number,
        department: String,
        specialist: String,
        feeDate: String,
        feeTime: String
      }
    ],
    attachment: [
      {
        file: String,
        fileName: String,
        date: String
      }
    ]
  },
  { timestamps: true }
);

const Patients = mongoose.model("patient", patientsModel);

module.exports = Patients;
