import axios from "axios";

export const createNewRoom = async (
  roomName,
  roomType,
  roomNumber,
  roomPrice,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setRoomName,
  setRoomType,
  setRoomNumber,
  setRoomPrice
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/admin/room/create",
      {
        roomName,
        roomType,
        roomNumber,
        roomPrice,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Room Created Successfully!");
    setRoomName("");
    setRoomType("");
    setRoomNumber(0);
    setRoomPrice(0);
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updateRoom = async (
  index,
  roomName,
  roomType,
  roomNumber,
  roomPrice,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setRoomName,
  setRoomType,
  setRoomNumber,
  setRoomPrice
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/admin/room/update",
      {
        id: index._id,
        roomName: roomName === "" ? index.roomName : roomName,
        roomType: roomType === "" ? index.roomType : roomType,
        roomNumber: roomNumber === 0 ? index.roomNumber : roomNumber,
        roomPrice: roomPrice === 0 ? index.roomPrice : roomPrice,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Room Updated Successfully!");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    setRoomName("");
    setRoomType("");
    setRoomNumber(0);
    setRoomPrice(0);
    handleClose();
  }
};

export const getRooms = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/admin/room`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};
