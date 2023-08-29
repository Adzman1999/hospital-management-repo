import {
  Autocomplete,
  Button,
  Card,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { updateXrayResult } from "../../../../actions/radiology/XrayResultAction";
import SubmitBox from "../../../../components/SubmitBox";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import { getPatients } from "../../../../actions/PatientAction";

const XrayResultEditModal = ({ index }) => {
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
  useEffect(() => {
    getPatients(setSearchResult);
  }, []);

  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [typeOfAdmission, setTypeOfAdmission] = useState("");
  const [patientName, setPatientName] = useState("");
  const [admission, setAdmission] = useState("");
  const [attendingPhysician, setAttendingPhysician] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [imageContainer, setImageContainer] = useState(null);

  const handleImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
      setImageContainer(reader.result);
    };
  };

  const handleCreateXrayResult = (e) => {
    e.preventDefault();
    updateXrayResult(
      index,
      handleClose,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      age,
      sex,
      typeOfAdmission,
      admission,
      attendingPhysician,
      address,
      contact,
      patientName,
      details,
      image,
      price,
      setAge,
      setSex,
      setTypeOfAdmission,
      setPatientName,
      setAdmission,
      setAttendingPhysician,
      setAddress,
      setContact,
      setDetails,
      setImage,
      setPrice,
      setImageContainer
    );
  };

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
          onSubmit={handleCreateXrayResult}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography
              color='primary'
              variant='h5'
              sx={{ fontWeight: 600, p: 0, m: 0 }}>
              Edit X-ray Result
            </Typography>

            <Stack spacing={2} direction='row'>
              <Stack spacing={2}>
                <Autocomplete
                  sx={{ width: 300, p: 0, m: 0 }}
                  size='small'
                  autoHighlight
                  id='highlights-demo'
                  options={searchData}
                  onChange={(e, value) => handleData(value)}
                  value={patientName}
                  renderInput={(params) => (
                    <>
                      <TextField
                        sx={{ p: 0, m: 0 }}
                        {...params}
                        placeholder='Search Patients...'
                        margin='normal'
                      />
                    </>
                  )}
                />
                <TextField
                  sx={{ width: 300 }}
                  size='small'
                  type='number'
                  label='Price'
                  variant='outlined'
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  label='Details Result'
                  multiline
                  sx={{ width: 300 }}
                  rows={11.5}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Stack>

              <Divider orientation='vertical' flexItem />
              <Stack alignItems='center' spacing={2}>
                <TextField
                  size='small'
                  fullWidth
                  type='file'
                  label='Set Image'
                  onChange={handleImage}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                    ),
                  }}
                />
                {imageContainer === null ? (
                  <Card
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px dashed gray",
                      borderRadius: 2,
                      height: "350px",
                      width: "298px",
                    }}>
                    <Stack spacing={2} direction='row'>
                      <AddPhotoAlternateOutlined />
                      <Typography>NO IMAGE YET</Typography>
                    </Stack>
                  </Card>
                ) : (
                  <img
                    src={imageContainer}
                    alt='pic'
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "3px",
                    }}
                  />
                )}
              </Stack>
            </Stack>

            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default XrayResultEditModal;
