import axios from "axios";

export const createNewDesignatedSupply = async (
  itemName,
  quantity,
  department,
  receiver,
  dateDesignated,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setItemName,
  setQuantity,
  setDepartment,
  setReceiver,
  setDateDesignated
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/admin/designated-supply/create",
      {
        itemName,
        quantity,
        department,
        receiver,
        dateDesignated,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Designated Supply Created Successfully!");
    setItemName("");
    setQuantity(0);
    setDepartment("");
    setReceiver("");
    setDateDesignated("");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updateDesignatedSupply = async (
  index,
  itemName,
  quantity,
  department,
  receiver,
  dateDesignated,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setItemName,
  setQuantity,
  setDepartment,
  setReceiver,
  setDateDesignated
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/admin/common-supply/update",
      {
        id: index._id,
        itemName: itemName === "" ? index.itemName : itemName,
        quantity: quantity === 0 ? index.quantity : quantity,
        department: department === "" ? index.department : department,
        receiver: receiver === "" ? index.receiver : receiver,
        dateDesignated:
          dateDesignated === "" ? index.dateDesignated : dateDesignated,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Common Supply Updated Successfully!");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    setItemName("");
    setQuantity(0);
    setDepartment("");
    setReceiver("");
    setDateDesignated("");
    handleClose();
  }
};

export const getDesignatedSupply = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/admin/designated-supply`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};
