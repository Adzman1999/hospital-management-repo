import axios from "axios";

export const createNewCommonSupply = async (
  itemName,
  quantity,
  dateOrdered,
  dateDelivered,
  itemPrice,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setItemName,
  setQuantity,
  setDateOrdered,
  setDelivered,
  setItemPrice
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/admin/common-supply/create",
      {
        itemName,
        quantity,
        dateOrdered,
        dateDelivered,
        itemPrice,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Common Supply Created Successfully!");
    setItemName("");
    setQuantity(0);
    setDateOrdered("");
    setDelivered("");
    setItemPrice(0);
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updateCommonSupply = async (
  index,
  itemName,
  quantity,
  dateOrdered,
  dateDelivered,
  itemPrice,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setItemName,
  setQuantity,
  setDateOrdered,
  setDelivered,
  setItemPrice
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
        dateOrdered: dateOrdered === "" ? index.dateOrdered : dateOrdered,
        dateDelivered:
          dateDelivered === "" ? index.dateDelivered : dateDelivered,
        itemPrice: itemPrice === 0 ? index.itemPrice : itemPrice,
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
    setDateOrdered("");
    setDelivered("");
    setItemPrice(0);
    handleClose();
  }
};

export const updateQuantity = async (stockId, quantity, stock) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/admin/common-supply/update-qty",
      {
        id: stockId,
        quantity: stock - quantity,
      },
      config
    );
    return data;
  } catch (error) {}
};

export const getCommonSupply = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/admin/common-supply`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};
