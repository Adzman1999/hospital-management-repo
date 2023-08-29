import React, { useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import SubmitBox from "../../../../components/SubmitBox";
import ModalComponent from "../../../../components/ModalComponent";
import { Add, AddPhotoAlternateOutlined } from "@mui/icons-material";
import {
  Card,
  Divider,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createNewDoctor } from "../../../../actions/admin/DoctorAction";

const NurseFormModal = () => {
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

  const [pic, setPic] = useState(null);
  const [picContainer, setPicContainer] = useState(null);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [extensionName, setExtensionName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [doctorFee, setDoctorFee] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [role, setRole] = useState("doctor");

  const handleImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setPic(reader.result);
      setPicContainer(reader.result);
    };
  };

  const handleCreateAdmin = (e) => {
    e.preventDefault();
    createNewDoctor(
      pic,
      lastName,
      firstName,
      middleName,
      extensionName,
      setSpecialist,
      specialist,
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
    );
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
        handleOpen={handleOpen}
        title='Add Doctor'
        icon={
          <Add
            color='primary'
            sx={{
              fontSize: 40,
              border: "1px solid #90CAF9",
              borderRadius: "50%",
            }}
          />
        }
        mdWidth={800}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreateAdmin}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Add Doctor
            </Typography>
            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack spacing={1}>
                <TextField
                  sx={{ width: "150px" }}
                  onChange={handleImage}
                  required
                  id='pic'
                  size='small'
                  type='file'
                  label='Set Picture'
                  variant='outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                    ),
                  }}
                />
                {picContainer === null ? (
                  <Card
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px dashed gray",
                      borderRadius: 2,
                      height: "150px",
                      width: "150",
                      borderRadius: "5px",
                    }}>
                    <Stack
                      spacing={1}
                      alignItems='center'
                      justifyContent='center'>
                      <AddPhotoAlternateOutlined />
                      <Typography variant='body2'>NO PICTURE YET</Typography>
                    </Stack>
                  </Card>
                ) : (
                  <img
                    src={picContainer}
                    alt='pic'
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Stack>

              <Divider orientation='vertical' flexItem />

              <Stack spacing={2} sx={{ width: "100%" }}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  size='small'
                  type='text'
                  label='Last Name'
                  variant='outlined'
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  fullWidth
                  required
                  id='firstName'
                  size='small'
                  type='text'
                  label='First Name'
                  variant='outlined'
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id='middleName'
                  size='small'
                  type='text'
                  label='Middle Name'
                  variant='outlined'
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <TextField
                  fullWidth
                  id='extensionName'
                  size='small'
                  type='text'
                  label='Extension Name'
                  variant='outlined'
                  onChange={(e) => setExtensionName(e.target.value)}
                />
              </Stack>
            </Stack>

            <Divider />
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                id='specialist'
                size='small'
                type='text'
                label='Specialist'
                variant='outlined'
                onChange={(e) => setSpecialist(e.target.value)}
              />
              <TextField
                required
                sx={{ width: 100 }}
                id='doctorFee'
                size='small'
                type='number'
                label='Fee'
                variant='outlined'
                onChange={(e) => setDoctorFee(e.target.value)}
              />
              <TextField
                required
                id='contactNo'
                size='small'
                type='text'
                label='Contact No.'
                variant='outlined'
                onChange={(e) => setContact(e.target.value)}
              />
              <TextField
                required
                id='email'
                size='small'
                type='email'
                label='Email'
                variant='outlined'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Stack>
            <Divider />

            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                id='address'
                size='small'
                type='text'
                label='Address'
                variant='outlined'
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                required
                id='birthdate'
                size='small'
                type='date'
                label='Birthdate'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                  ),
                }}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <TextField
                required
                sx={{ width: 100 }}
                id='age'
                size='small'
                type='number'
                label='Age'
                aria-aria-readonly
                variant='outlined'
                onChange={(e) => setAge(e.target.value)}
              />
              <Divider orientation='vertical' flexItem />
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                name='radio-buttons-group'>
                <Stack spacing={1} direction='row' alignItems='center'>
                  <Typography>Sex</Typography>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={sex === "male"}
                        value='male'
                        onChange={(e) => setSex(e.target.value)}
                      />
                    }
                    label='Male'
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={sex === "female"}
                        value='female'
                        onChange={(e) => setSex(e.target.value)}
                      />
                    }
                    label='Female'
                  />
                </Stack>
              </RadioGroup>
            </Stack>
            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default NurseFormModal;
