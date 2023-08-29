import axios from "axios";

export const createNewPatient = async (
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
  admissionDate,
  admissionTime,
  healthInsurance,
  sponsorName,
  hosPlan,
  setSucceed,
  handleSnackbarOpenSuccess,
  setErr,
  handleSnackbarOpenError,
  setSponsorName,
  setLastName,
  setFirstName,
  setMiddleName,
  setRoomNumber,
  setRoomType,
  setRoomPrice,
  setRoomName,
  setPermanentAddress,
  setContact,
  setSex,
  setCivilStatus,
  setBirthdate,
  setAge,
  setBirthplace,
  setNationality,
  setReligion,
  setOccupation,
  setFatherName,
  setFatherAddress,
  setFatherContact,
  setMotherName,
  setMotherAddress,
  setMotherContact,
  setAdmissionDate,
  setAdmissionTime,
  setHosPlan,
  setHealthInsurance
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/create",
      {
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
        admission: {
          date: admissionDate,
          time: admissionTime,
        },
        healthInsurance,
        sponsorName,
        hosPlan,
      },
      config
    );

    setLastName("");
    setFirstName("");
    setMiddleName("");
    setRoomNumber(0);
    setRoomType("");
    setRoomPrice(0);
    setRoomName("");
    setPermanentAddress("");
    setContact("");
    setSex("");
    setCivilStatus("");
    setBirthdate("");
    setAge(0);
    setBirthplace("");
    setNationality("");
    setReligion("");
    setOccupation("");
    setFatherName("");
    setFatherAddress("");
    setFatherContact("");
    setMotherName("");
    setMotherAddress("");
    setMotherContact("");
    setAdmissionDate("");
    setAdmissionTime("");
    setHosPlan("");
    setHealthInsurance("");
    setSponsorName("");
    setSucceed("IPD Successfully Added!");
    handleSnackbarOpenSuccess();
    return data;
  } catch (err) {
    setErr("Unsuccessfully Created, Please try again!");
    handleSnackbarOpenError();
  }
};

export const createOPD = async (
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
  setSucceed,
  handleSnackbarOpenSuccess,
  setErr,
  handleSnackbarOpenError,
  setSponsorName,
  setLastName,
  setFirstName,
  setMiddleName,
  setPermanentAddress,
  setContact,
  setSex,
  setCivilStatus,
  setBirthdate,
  setAge,
  setBirthplace,
  setNationality,
  setReligion,
  setOccupation,
  setFatherName,
  setFatherAddress,
  setFatherContact,
  setMotherName,
  setMotherAddress,
  setMotherContact,
  setHosPlan,
  setHealthInsurance
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/opd",
      {
        formerOPD: true,
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
      config
    );
    setLastName("");
    setFirstName("");
    setMiddleName("");
    setPermanentAddress("");
    setContact("");
    setSex("");
    setCivilStatus("");
    setBirthdate("");
    setAge(0);
    setBirthplace("");
    setNationality("");
    setReligion("");
    setOccupation("");
    setFatherName("");
    setFatherAddress("");
    setFatherContact("");
    setMotherName("");
    setMotherAddress("");
    setMotherContact("");
    setHosPlan("");
    setHealthInsurance("");
    setSponsorName("");
    setSucceed("OPD Successfully Added!");
    handleSnackbarOpenSuccess(true);
    return data;
  } catch (err) {
    setErr("Unsuccessfully Created, Please try again!");
    handleSnackbarOpenError(true);
  }
};

export const updateOPD = async (
  index,
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
  setSucceed,
  handleSnackbarOpenSuccess,
  setErr,
  handleSnackbarOpenError,
  handleClose
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/nurse/patient/update-opd",
      {
        id: index._id,
        lastName: lastName === "" ? index.lastName : lastName,
        firstName: firstName === "" ? index.firstName : firstName,
        middleName: middleName === "" ? index.middleName : middleName,

        permanentAddress:
          permanentAddress === "" ? index.permanentAddress : permanentAddress,
        contact: contact === "" ? index.contact : contact,
        sex: sex === "" ? index.sex : sex,
        civilStatus: civilStatus === "" ? index.civilStatus : civilStatus,
        birthdate: birthdate === "" ? index.birthdate : birthdate,
        age: age === 0 ? index.age : age,
        birthplace: birthplace === "" ? index.birthplace : birthplace,
        nationality: nationality === "" ? index.nationality : nationality,
        religion: religion === "" ? index.religion : religion,
        occupation: occupation === "" ? index.occupation : occupation,
        fatherName: fatherName === "" ? index.fatherName : fatherName,
        fatherAddress:
          fatherAddress === "" ? index.fatherAddress : fatherAddress,
        fatherContact:
          fatherContact === "" ? index.fatherContact : fatherContact,
        motherName: motherName === "" ? index.motherName : motherName,
        motherAddress:
          motherAddress === "" ? index.motherAddress : motherAddress,
        motherContact:
          motherContact === "" ? index.motherContact : motherContact,
        hosPlan: hosPlan === 0 ? index.hosPlan : hosPlan,
        healthInsurance:
          healthInsurance === "" ? index.healthInsurance : healthInsurance,
        sponsorName: sponsorName === "" ? index.sponsorName : sponsorName,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Patient Updated Successfully!!");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updateBasicPatientInfo = async (
  index,
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
  admissionDate,
  admissionTime,
  healthInsurance,
  sponsorName,
  hosPlan,
  setSucceed,
  handleSnackbarOpenSuccess,
  setErr,
  handleSnackbarOpenError,
  handleClose
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/nurse/patient/update-basic-info",
      {
        id: index._id,
        lastName: lastName === "" ? index.lastName : lastName,
        firstName: firstName === "" ? index.firstName : firstName,
        middleName: middleName === "" ? index.middleName : middleName,
        roomNumber: roomNumber === 0 ? index.roomNumber : roomNumber,
        roomType: roomType === "" ? index.roomType : roomType,
        roomPrice: roomPrice === 0 ? index.roomPrice : roomPrice,
        roomName: roomName === "" ? index.roomName : roomName,
        permanentAddress:
          permanentAddress === "" ? index.permanentAddress : permanentAddress,
        contact: contact === "" ? index.contact : contact,
        sex: sex === "" ? index.sex : sex,
        civilStatus: civilStatus === "" ? index.civilStatus : civilStatus,
        birthdate: birthdate === "" ? index.birthdate : birthdate,
        age: age === 0 ? index.age : age,
        birthplace: birthplace === "" ? index.birthplace : birthplace,
        nationality: nationality === "" ? index.nationality : nationality,
        religion: religion === "" ? index.religion : religion,
        occupation: occupation === "" ? index.occupation : occupation,
        fatherName: fatherName === "" ? index.fatherName : fatherName,
        fatherAddress:
          fatherAddress === "" ? index.fatherAddress : fatherAddress,
        fatherContact:
          fatherContact === "" ? index.fatherContact : fatherContact,
        motherName: motherName === "" ? index.motherName : motherName,
        motherAddress:
          motherAddress === "" ? index.motherAddress : motherAddress,
        motherContact:
          motherContact === "" ? index.motherContact : motherContact,
        admissionDate:
          admissionDate === "" ? index.admissionDate : admissionDate,
        admissionTime:
          admissionTime === "" ? index.admissionTime : admissionTime,
        healthInsurance:
          healthInsurance === "" ? index.healthInsurance : healthInsurance,
        sponsorName: sponsorName === "" ? index.sponsorName : sponsorName,
        hosPlan: hosPlan === "" ? index.hosPlan : hosPlan,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Patient Updated Successfully!!");
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updateToDischargePatient = async (
  index,
  dischargeDate,
  dischargeTime,
  totalNoDays,
  admissionDiagnosis,
  finalDiagnosis,
  otherDiagnosis,
  disposition,
  results,
  setSucceed,
  handleSnackbarOpenSuccess,
  setErr,
  handleSnackbarOpenError
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/nurse/patient/update-to-discharge",

      {
        id: index._id,
        discharge: {
          date: dischargeDate,
          time: dischargeTime,
        },
        totalNoDays: totalNoDays,
        admissionDiagnosis: admissionDiagnosis,
        finalDiagnosis: finalDiagnosis,
        otherDiagnosis: otherDiagnosis,
        disposition: disposition,
        results: results,
        disposition: disposition,
        results: results,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Patient Is Ready To Discharge!!");
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
  }
};

export const getPatients = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/nurse/patient`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};

export const AddBilling = async (datePaid, totalDue, billingId) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/billing/create",
      {
        datePaid,
        totalBills: totalDue,
        patientId: billingId,
      },
      config
    );
    return data;
  } catch (error) {
    alert("error");
  }
};

export const AddNurseRemark = async (
  remark,
  nurse,
  remarkDate,
  remarkTime,
  index
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/remark/create",
      {
        remark,
        nurse,
        remarkDate,
        remarkTime,
        patientId: index._id,
      },
      config
    );
    return data;
  } catch (error) {
    alert("error");
  }
};

export const AddDoctorPrescription = async (
  attendingPhysician,
  medicine,
  qty,
  hrsPerIntake,
  prescribeDate,
  prescribeTime,
  index
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/prescription/create",
      {
        attendingPhysician,
        medicine,
        qty,
        hrsPerIntake,
        prescribeDate,
        prescribeTime,
        patientId: index._id,
      },
      config
    );
    return data;
  } catch (error) {
    alert("error");
  }
};

export const AddDoctorFee = async (
  attendingPhysician,
  consultationFee,
  department,
  specialist,
  feeDate,
  feeTime,
  index
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/doctor-fee/create",
      {
        attendingPhysician,
        consultationFee,
        department,
        specialist,
        feeDate,
        feeTime,
        patientId: index._id,
      },
      config
    );
    return data;
  } catch (error) {
    alert("error");
  }
};

export const searchPatients = async (search, setSearchResult1) => {
  try {
    const { data } = await axios.get(
      `/api/nurse/patient/keyword?search=${search}`
    );
    setSearchResult1(data);
  } catch (error) {
    alert("error");
  }
};

export const addAttachmentFile = async (
  file,
  fileName,
  date,
  index,
  setSucceed,
  handleSnackbarOpenSuccess
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/nurse/patient/attachment/create",
      {
        file,
        fileName,
        date,
        patientId: index._id,
      },
      config
    );
    setSucceed("Successfully Added!");
    handleSnackbarOpenSuccess();
    return data;
  } catch (error) {
    alert("error");
  }
};
