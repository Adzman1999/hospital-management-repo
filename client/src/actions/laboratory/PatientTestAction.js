import axios from "axios";

export const createPatientTest = async (
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
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
  setSwabTestResult,
  setSwabTestPrice,
  setTransfusionBloodType,
  setTransfusionBagCount,
  setTransfusionDonorName,
  setPregnantUrineTest,
  setKidneyDiseaseUrineTest,
  setDiabetesUrineTest,
  setLiverDiseaseUrineTest,
  setUrineTestPrice,
  setBloodTypeTest,
  setBloodPressureTest,
  setWhiteBloodCountTest,
  setRedBloodCountTest,
  setBloodTestPrice,
  setRemark
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/laboratory/patient-test/add",
      {
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
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Patient Test Created Successfully!!");
    setSwabTestResult("");
    setSwabTestPrice(0);
    setTransfusionBloodType("");
    setTransfusionBagCount(0);
    setTransfusionDonorName("");
    setPregnantUrineTest("");
    setKidneyDiseaseUrineTest("");
    setDiabetesUrineTest("");
    setLiverDiseaseUrineTest("");
    setUrineTestPrice(0);
    setBloodTypeTest("");
    setBloodPressureTest("");
    setWhiteBloodCountTest(0);
    setRedBloodCountTest(0);
    setBloodTestPrice(0);
    setRemark("")
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr(error.message);
    handleClose();
  }
};
