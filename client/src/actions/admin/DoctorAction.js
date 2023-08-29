import axios from "axios";

export const createNewDoctor = async (
  pic,
  lastName,
  firstName,
  middleName,
  extensionName,
  setSpecialist,
  setDepartment,
  specialist,
  department,
  doctorFee,
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
  setDoctorFee,
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
        specialist,
        doctorFee,
        department,
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
    setSucceed("Doctor Created Successfully!!");
    setPic(null);
    setPicContainer(null);
    setLastName("");
    setMiddleName("");
    setExtensionName("");
    setDoctorFee("");
    setContact("");
    setEmail("");
    setFirstName("");
    setAddress("");
    setBirthdate("");
    setAge("");
    setSex("");
    setDepartment("");
    setRole("");
    setSpecialist("");
    handleClose();
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
    handleClose();
  }
};

export const updateDoctor = async (
  index,
  pic,
  lastName,
  firstName,
  middleName,
  extensionName,
  setSpecialist,
  setDepartment,
  specialist,
  department,
  doctorFee,
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
  setDoctorFee,
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
        pic: pic === null ? index.pic : pic,
        lastName: lastName === "" ? index.lastName : lastName,
        firstName: firstName === "" ? index.firstName : firstName,
        middleName: middleName === "" ? index.middleName : middleName,
        extensionName:
          extensionName === "" ? index.extensionName : extensionName,
        specialist: specialist === "" ? index.specialist : specialist,
        doctorFee: doctorFee === "" ? index.doctorFee : doctorFee,
        department: department === "" ? index.department : department,
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
    setSucceed("Doctor Updated Successfully!!");
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
    setSpecialist("");
    setDoctorFee("");
    setContact("");
    setEmail("");
    setDepartment("");
    setAddress("");
    setBirthdate("");
    setAge(0);
    setSex("");
    handleClose();
  }
};

export const getDoctors = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/admin/role/doctor`);
    setSearchResult(data);
    console.log(data);
  } catch (error) {
    alert("error");
  }
};


