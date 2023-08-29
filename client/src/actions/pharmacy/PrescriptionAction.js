import axios from "axios";

export const AddPrescription = async (
  prescriptionId,
  medicineNAme,
  brand,
  quantity,
  price,
  setErr,
  handleSnackbarOpenError,
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
      "/api/pharmacy/prescription/add",
      {
        medicineNAme,
        brand,
        quantity,
        price: price * quantity,
        patientId: prescriptionId,
      },
      config
    );
    setSucceed("Added Successfully!");
    handleSnackbarOpenSuccess();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
  }
};
