import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Card,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { updatePrescription } from "../../../../actions/pharmacy/PrescriptionAction";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import SubmitBox from "../../../../components/SubmitBox";
import { getPatients } from "../../../../actions/PatientAction";
import {
  getMedicines,
  updateStock,
} from "../../../../actions/pharmacy/MedicineAction";

const PrescriptionEditModal = ({ index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [err, setErr] = useState(null);
  const [succeed, setSucceed] = useState(null);

  const [snackbarSuccess, setSnackBarSuccess] = useState(false);
  const [snackbarError, setSnackBarError] = useState(false);

  const handleSnackbarOpenSuccess = () => {
    setSnackBarSuccess(true);
  };

  const handleSnackbarOpenError = () => {
    setSnackBarError(true);
  };

  const [searchResult, setSearchResult] = useState([]);
  const [searchResult1, setSearchResult1] = useState([]);
  const [stock, setStock] = useState(0);
  const [stockId, setStockId] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [typeOfAdmission, setTypeOfAdmission] = useState("");
  const [patientName, setPatientName] = useState("");
  const [admission, setAdmission] = useState("");
  const [attendingPhysician, setAttendingPhysician] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const [medicineNAme, setMedicineNAme] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getPatients(setSearchResult);
  }, []);

  useEffect(() => {
    getMedicines(setSearchResult1);
  }, []);

  const handleData = (data) => {
    try {
      setPatientName(data.label);
      setSex(data.sex);
      setAge(data.age);
      setContact(data.contact);
      setAddress(data.permanentAddress);
      setAdmission(data.admission);
      setTypeOfAdmission(data.typeOfAdmission);
      setAttendingPhysician(data.attendingPhysician);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setPatientName("");
      setSex("");
      setAge("");
      setContact("");
      setAddress("");
      setAdmission("");
      setTypeOfAdmission("");
      setAttendingPhysician("");
    }
  };

  const handleData1 = (data) => {
    try {
      setStockId(data.id);
      setMedicineNAme(data.label);
      setBrand(data.brand);
      setPrice(data.price);
      setStock(data.quantity);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setMedicineNAme("");
      setBrand("");
      setQuantity(1);
      setPrice(0);
    }
  };

  let medicineData = [];
  for (var j = 0; j < searchResult1.length; j++) {
    medicineData.push({
      id: searchResult1[j]._id,
      label: searchResult1[j].medicineNAme,
      brand: searchResult1[j].brand,
      quantity: searchResult1[j].quantity,
      price: searchResult1[j].price,
    });
  }

  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      label:
        searchResult[i].firstName +
        " " +
        searchResult[i].middleName +
        " " +
        searchResult[i].lastName,
      age: searchResult[i].age,
      sex: searchResult[i].sex,
      contact: searchResult[i].contact,
      permanentAddress: searchResult[i].permanentAddress,
      admission: searchResult[i].admission.date,
      typeOfAdmission: searchResult[i].typeOfAdmission,
      attendingPhysician: searchResult[i].attendingPhysician,
    });
  }

  const handleUpdatePrescription = (e) => {
    e.preventDefault();
    if (stock <= quantity) {
      setErr("You've Entered Maximum Stock Of Medicine!");
      handleSnackbarOpenError();
      handleClose();
    } else {
      updatePrescription(
        index,
        age,
        sex,
        typeOfAdmission,
        admission,
        attendingPhysician,
        address,
        contact,
        patientName,
        medicineNAme,
        brand,
        quantity,
        price,
        handleClose,
        setErr,
        setSucceed,
        handleSnackbarOpenSuccess,
        handleSnackbarOpenError,
        setAge,
        setSex,
        setTypeOfAdmission,
        setPatientName,
        setAdmission,
        setAttendingPhysician,
        setAddress,
        setContact,
        setMedicineNAme,
        setBrand,
        setQuantity,
        setPrice
      );
      updateStock(stockId, stock, quantity);
    }
  };
  return (
    <>
      <SnackbarMessage
        message={err}
        open={snackbarError}
        handleClose={setSnackBarError}
        severity='error'
      />
      <SnackbarMessage
        message={succeed}
        open={snackbarSuccess}
        handleClose={setSnackBarSuccess}
        severity='success'
      />
      <ModalComponent
        open={open}
        buttonName={
          <Button
            onClick={handleOpen}
            id='sign-up'
            className='btn-bg'
            variant='contained'
            sx={{
              textTransform: "capitalize",
              boxShadow: 0,
            }}>
            Edit
          </Button>
        }
        mdWidth={700}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleUpdatePrescription}>
          <Stack spacing={2} mb={1} mt={2}>
            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack>
                <Typography variant='h6' color='primary'>
                  Patients Info:
                </Typography>
                <Autocomplete
                  sx={{ width: 200 }}
                  fullWidth
                  size='small'
                  autoHighlight
                  id='highlights-demo'
                  options={searchData}
                  onChange={(e, value) => handleData(value)}
                  value={patientName}
                  renderInput={(params) => (
                    <>
                      <TextField
                        {...params}
                        placeholder='Search Patients...'
                        margin='normal'
                      />
                    </>
                  )}
                />
              </Stack>

              <Divider orientation='vertical' flexItem />
              <Stack
                direction='row'
                alignItems='center'
                spacing={2}
                sx={{ width: 200 }}>
                <TextField
                  value={age}
                  sx={{ width: 200 }}
                  disabled
                  id='age'
                  size='small'
                  type='text'
                  label='Age'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
                <TextField
                  value={sex}
                  disabled
                  id='sex'
                  size='small'
                  type='text'
                  label='Sex'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
              </Stack>

              <TextField
                value={contact}
                fullWidth
                disabled
                id='contact'
                size='small'
                type='text'
                label='Contact No.'
                variant='standard'
                onChange={(e, value) => handleData(value)}
              />
            </Stack>

            <Divider />

            <Stack
              spacing={2}
              direction='row'
              alignItems='center'
              sx={{ width: "100%" }}>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  value={address}
                  disabled
                  id='permanentAddress'
                  size='small'
                  type='text'
                  label='Address'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
                <TextField
                  fullWidth
                  value={admission}
                  disabled
                  id='admission'
                  size='small'
                  type='text'
                  label='Admission'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
              </Stack>

              <Stack spacing={2} sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  value={typeOfAdmission}
                  disabled
                  id='typeOfAdmission'
                  size='small'
                  type='text'
                  label='Type of Admission'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
                <TextField
                  fullWidth
                  value={attendingPhysician}
                  disabled
                  id='attendingPhysician'
                  size='small'
                  type='text'
                  label='Attending Physician'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
              </Stack>
            </Stack>

            <Divider />

            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack>
                <Typography variant='h6' color='primary'>
                  Medicines Info:
                </Typography>
                <Autocomplete
                  sx={{ width: 200 }}
                  fullWidth
                  size='small'
                  autoHighlight
                  id='highlights-demo'
                  options={medicineData}
                  onChange={(e, value) => handleData1(value)}
                  value={medicineNAme}
                  renderInput={(params) => (
                    <>
                      <TextField
                        {...params}
                        placeholder='Search Medicine...'
                        margin='normal'
                      />
                    </>
                  )}
                />
              </Stack>

              <Divider orientation='vertical' flexItem />
              <Stack direction='row' alignItems='center' spacing={2}>
                <TextField
                  sx={{ width: 100 }}
                  value={quantity}
                  id='quantity'
                  size='small'
                  type='number'
                  label='Set Quantity'
                  variant='standard'
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <TextField
                  value={price * quantity}
                  disabled
                  id='price'
                  size='small'
                  type='number'
                  label='Price'
                  variant='standard'
                  onChange={(e, value) => handleData1(value)}
                />

                <TextField
                  value={brand}
                  disabled
                  id='brand'
                  size='small'
                  type='text'
                  label='Brand Name'
                  variant='standard'
                  onChange={(e, value) => handleData1(value)}
                />
              </Stack>
            </Stack>

            {/* /////////////////////// */}
            <Divider />
            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default PrescriptionEditModal;
