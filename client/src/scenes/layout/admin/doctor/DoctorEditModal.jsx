import React, { useState } from "react";
import { updateDoctor } from "../../../../actions/admin/DoctorAction";
import {
  Card,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddPhotoAlternateOutlined, EditOutlined, Update } from "@mui/icons-material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import SubmitBox from "../../../../components/SubmitBox";

const DoctorEditModal = ({ index }) => {
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
  const [department, setDepartment] = useState("");
  const [doctorFee, setDoctorFee] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");

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
    updateDoctor(
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
        icon={
          <Tooltip title='Add Doctor'>
            <IconButton
              sx={{ zIndex: 100 }}
              onClick={handleOpen}
              size='small'
              variant='outlined'>
              <EditOutlined size='small' color='success' />
            </IconButton>
          </Tooltip> 
          
        }
        mdWidth={800}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreateAdmin}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Edit Doctor
            </Typography>
            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack spacing={1}>
                <TextField
                  sx={{ width: "150px" }}
                  onChange={handleImage}
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
                  id='firstName'
                  size='small'
                  type='text'
                  label='First Name'
                  variant='outlined'
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  fullWidth
                  id='middleName'
                  size='small'
                  type='text'
                  label='Middle Name'
                  variant='outlined'
                  onChange={(e) => setMiddleName(e.target.value)}
                />

                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    id='extensionName'
                    size='small'
                    type='text'
                    label='Extension Name'
                    variant='outlined'
                    onChange={(e) => setExtensionName(e.target.value)}
                  />
                  <TextField
                    id='specialist'
                    size='small'
                    type='text'
                    label='Specialist'
                    variant='outlined'
                    onChange={(e) => setSpecialist(e.target.value)}
                  />
                </Stack>
              </Stack>
            </Stack>

            <Divider />
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                id='department'
                size='small'
                type='text'
                label='Department'
                variant='outlined'
                onChange={(e) => setDepartment(e.target.value)}
              />
              <TextField
                sx={{ width: 100 }}
                id='doctorFee'
                size='small'
                type='number'
                label='Fee'
                variant='outlined'
                onChange={(e) => setDoctorFee(e.target.value)}
              />
              <TextField
                id='contactNo'
                size='small'
                type='text'
                label='Contact No.'
                variant='outlined'
                onChange={(e) => setContact(e.target.value)}
              />
              <TextField
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
                id='address'
                size='small'
                type='text'
                label='Address'
                variant='outlined'
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
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

export default DoctorEditModal;
