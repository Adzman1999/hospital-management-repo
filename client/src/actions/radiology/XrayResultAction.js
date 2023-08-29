import axios from "axios";

export const createNewXrayResult = async (
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  patientId,
  details,
  image
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/radiology/xray-result/add",
      {
        patientId,
        details,
        image,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Added Successfully!!");
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
  }
};

export const addPatientXrayPrice = async (patientId, price) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/radiology/xray-result/update",
      {
        patientId,
        xrayPrice: price,
      },
      config
    );
    return data;
  } catch (error) {
    alert(error.message);
  }
};
