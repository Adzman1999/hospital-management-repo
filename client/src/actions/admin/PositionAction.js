import axios from "axios";

export const createNewPosition = async (
  CreatedSuccessMessage,
  pic,
  lastName,
  firstName,
  middleName,
  extensionName,
  department,
  shift,
  contact,
  email,
  address,
  birthdate,
  age,
  sex,
  role,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setPic,
  setPicContainer,
  setLastName,
  setFirstName,
  setMiddleName,
  setExtensionName,
  setDepartment,
  setShift,
  setContact,
  setEmail,
  setAddress,
  setBirthdate,
  setAge,
  setSex,
  setRole
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/admin/role/create",
      {
        pic,
        lastName,
        firstName,
        middleName,
        extensionName,
        department,
        shift,
        contact,
        email,
        address,
        birthdate,
        age,
        sex,
        role,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed(CreatedSuccessMessage);
    setPic(null);
    setPicContainer(null);
    setLastName("");
    setMiddleName("");
    setExtensionName("");
    setShift("");
    setContact("");
    setEmail("");
    setFirstName("");
    setAddress("");
    setBirthdate("");
    setAge("");
    setSex("");
    setRole("");
    setDepartment("");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updatePosition = async (
  EditorialSuccessMessage,
  index,
  pic,
  lastName,
  firstName,
  middleName,
  extensionName,
  department,
  shift,
  contact,
  email,
  address,
  birthdate,
  age,
  sex,
  handleClose,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setPic,
  setPicContainer,
  setLastName,
  setFirstName,
  setMiddleName,
  setExtensionName,
  setDepartment,
  setShift,
  setContact,
  setEmail,
  setAddress,
  setBirthdate,
  setAge,
  setSex
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/admin/role/update",
      {
        id: index._id,
        pic: pic === "" ? index.pic : pic,
        lastName: lastName === "" ? index.lastName : lastName,
        firstName: firstName === "" ? index.firstName : firstName,
        middleName: middleName === "" ? index.middleName : middleName,
        extensionName:
          extensionName === "" ? index.extensionName : extensionName,
        department: department === "" ? index.department : department,
        shift: shift === "" ? index.shift : shift,
        contact: contact === "" ? index.contact : contact,
        email: email === "" ? index.email : email,
        address: address === "" ? index.address : address,
        birthdate: birthdate === "" ? index.birthdate : birthdate,
        age: age === 0 ? index.age : age,
        sex: sex === "" ? index.sex : sex,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed(EditorialSuccessMessage);
    handleClose();
    setPicContainer(null);
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    setPic(null);
    setPicContainer(null);
    setLastName("");
    setFirstName("");
    setMiddleName("");
    setExtensionName("");
    setShift("");
    setDepartment("");
    setContact("");
    setEmail("");
    setAddress("");
    setBirthdate("");
    setAge("");
    setSex("");
    handleClose();
  }
};

export const getPositions = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/admin/role`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};

export const getNurse = async (setSearchResult1) => {
  try {
    const { data } = await axios.get(`/api/admin/role/nurse`);
    setSearchResult1(data);
    console.log(data);
  } catch (error) {
    alert("error");
  }
};


export const searchRoles = async (search, setSearchResult1) => {
  try {
    const { data } = await axios.get(`/api/admin/role/keyword?search=${search}`);
    setSearchResult1(data);
  } catch (error) {
    alert("error");
  }
};