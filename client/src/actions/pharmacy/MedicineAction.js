import axios from "axios";

export const createNewMedicine = async (
  medicineNAme,
  brand,
  manufacturer,
  expiration,
  dateOrdered,
  dateArrived,
  dosage,
  type,
  quantity,
  price,
  description,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setMedicineNAme,
  setBrand,
  setManufacturer,
  setExpiration,
  setDateOrdered,
  setDateArrived,
  setDosage,
  setType,
  setQuantity,
  setPrice,
  setDescription
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/pharmacy/medicine/create",
      {
        medicineNAme,
        brand,
        manufacturer,
        expiration,
        dateOrdered,
        dateArrived,
        dosage,
        type,
        quantity,
        price,
        description,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Medicine Created Successfully!!");
    setMedicineNAme("");
    setBrand("");
    setManufacturer("");
    setExpiration("");
    setDateOrdered("");
    setDateArrived("");
    setDosage("");
    setType("");
    setQuantity("");
    setPrice(0);
    setDescription(0);
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const getMedicines = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/pharmacy/medicine`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};

export const updateMedicine = async (
  index,
  medicineNAme,
  brand,
  manufacturer,
  expiration,
  dateOrdered,
  dateArrived,
  dosage,
  type,
  quantity,
  price,
  description,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setMedicineNAme,
  setBrand,
  setManufacturer,
  setExpiration,
  setDateOrdered,
  setDateArrived,
  setDosage,
  setType,
  setQuantity,
  setPrice,
  setDescription
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/pharmacy/medicine/update",
      {
        id: index._id,
        medicineNAme: medicineNAme === "" ? index.medicineNAme : medicineNAme,
        brand: brand === "" ? index.brand : brand,
        manufacturer: manufacturer === "" ? index.manufacturer : manufacturer,
        expiration: expiration === "" ? index.expiration : expiration,
        dateOrdered: dateOrdered === "" ? index.dateOrdered : dateOrdered,
        dateArrived: dateArrived === "" ? index.dateArrived : dateArrived,
        dosage: dosage === "" ? index.dosage : dosage,
        type: type === "" ? index.type : type,
        quantity: quantity === 0 ? index.quantity : quantity,
        price: price === 0 ? index.price : price,
        description: description === "" ? index.description : description,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Medicine Updated Successfully!!");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();

    setMedicineNAme("");
    setBrand("");
    setManufacturer("");
    setExpiration("");
    setDateOrdered("");
    setDateArrived("");
    setDosage("");
    setType("");
    setQuantity(0);
    setPrice(0);
    setDescription("");
  }
};

export const updateStock = async (stockId, stock, quantity) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/pharmacy/medicine/update-stock`,
      {
        id: stockId,
        quantity: stock - quantity,
      },
      config
    );
    return data;
  } catch (error) {
    alert("error");
  }
};

export const searchMedicine = async (search, setSearchResult1) => {
  try {
    const { data } = await axios.get(`/api/pharmacy/medicine/get-medicine?search=${search}`);
    setSearchResult1(data);
  } catch (error) {
    alert("error");
  }
};