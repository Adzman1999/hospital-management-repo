import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import {
  Autocomplete,
  Button,
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
import { updateBasicPatientInfo } from "../../../../actions/PatientAction";
import { Add } from "@mui/icons-material";
import { getRooms } from "../../../../actions/admin/RoomsAction";

const PatientEditModal = ({ index }) => {
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

  const [nextOpen1, setNextOpen1] = useState(true);
  const [nextOpen2, setNextOpen2] = useState(false);

  const handleOpenNext1 = () => {
    setNextOpen1(true);
    setNextOpen2(false);
  };
  const handleOpenNext2 = () => {
    setNextOpen1(false);
    setNextOpen2(true);
  };

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getRooms(setSearchResult);
  }, []);
  const handleData = (data) => {
    try {
      setRoomNumber(data.label);
      setRoomType(data.roomType);
      setRoomPrice(data.roomPrice);
      setRoomName(data.roomName);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setRoomNumber(0);
      setRoomType("");
      setRoomPrice(0);
      setRoomName("");
    }
  };
  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      label: searchResult[i].roomNumber,
      roomType: searchResult[i].roomType,
      roomPrice: searchResult[i].roomPrice,
      roomName: searchResult[i].roomName,
    });
  }

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [roomName, setRoomName] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [contact, setContact] = useState("");
  const [sex, setSex] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);
  const [birthplace, setBirthplace] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [occupation, setOccupation] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherAddress, setFatherAddress] = useState("");
  const [fatherContact, setFatherContact] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherAddress, setMotherAddress] = useState("");
  const [motherContact, setMotherContact] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [admissionTime, setAdmissionTime] = useState("");

  const handleUpdateBasicPatientInfo = (e) => {
    e.preventDefault();
    updateBasicPatientInfo(
      index,
      lastName,
      firstName,
      middleName,
      roomNumber,
      roomType,
      roomPrice,
      roomName,
      permanentAddress,
      contact,
      sex,
      civilStatus,
      birthdate,
      age,
      birthplace,
      nationality,
      religion,
      occupation,
      fatherName,
      fatherAddress,
      fatherContact,
      motherName,
      motherAddress,
      motherContact,
      admissionDate,
      admissionTime,
      setSucceed,
      handleSnackbarOpenSuccess,
      setErr,
      handleSnackbarOpenError,
      setLastName,
      setFirstName,
      setMiddleName,
      setRoomNumber,
      setRoomType,
      setRoomPrice,
      setRoomName,
      setPermanentAddress,
      setContact,
      setSex,
      setCivilStatus,
      setBirthdate,
      setAge,
      setBirthplace,
      setNationality,
      setReligion,
      setOccupation,
      setFatherName,
      setFatherAddress,
      setFatherContact,
      setMotherName,
      setMotherAddress,
      setMotherContact,
      setAdmissionDate,
      setAdmissionTime
    );
    handleClose();
  };
  return (
    <>
      <SnackbarMessage
        message={err}
        open={snackbarError}
        handleClose={setSnackBarError}
        severity="error"
      />
      <SnackbarMessage
        message={succeed}
        open={snackbarSuccess}
        handleClose={setSnackBarSuccess}
        severity="success"
      />

      <ModalComponent
        open={open}
        buttonName={
          <Button
            disabled={index.results}
            onClick={handleOpen}
            id="sign-up"
            className="btn-bg"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              boxShadow: 0,
            }}
          >
            Edit
          </Button>
        }
        mdWidth={600}
      >
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component="form"
          onSubmit={handleUpdateBasicPatientInfo}
        >
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color="primary" variant="h5" sx={{ fontWeight: 600 }}>
              Edit Patient
            </Typography>
            <Stack
              spacing={2}
              sx={{ display: nextOpen1 === true ? "block" : "none" }}
            >
              <Stack spacing={2} direction="row" alignItems="center">
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Last Name"
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Middle Name"
                  variant="outlined"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </Stack>

              <Stack spacing={2} direction="row" alignItems="center">
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Permanent Address"
                  variant="outlined"
                  onChange={(e) => setPermanentAddress(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Birthplace"
                  variant="outlined"
                  onChange={(e) => setBirthplace(e.target.value)}
                />
              </Stack>

              <Stack spacing={2} direction="row" alignItems="center">
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Nationality"
                  variant="outlined"
                  onChange={(e) => setNationality(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Religion"
                  variant="outlined"
                  onChange={(e) => setReligion(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  label="Occupation"
                  variant="outlined"
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </Stack>

              <Stack spacing={4} direction="row" alignItems="center">
                <Stack>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <Typography sx={{ fontWeight: 600 }}>Sex</Typography>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={sex === "male"}
                          value="male"
                          onChange={(e) => setSex(e.target.value)}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={sex === "female"}
                          value="female"
                          onChange={(e) => setSex(e.target.value)}
                        />
                      }
                      label="Female"
                    />
                  </RadioGroup>
                </Stack>

                <Divider orientation="vertical" flexItem />
                <Stack spacing={1}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Civil Status
                    </Typography>
                    <Stack direction="row" spacing={6}>
                      <Stack>
                        <FormControlLabel
                          control={
                            <Radio
                              checked={civilStatus === "single"}
                              onChange={(e) => setCivilStatus(e.target.value)}
                              value="single"
                            />
                          }
                          label="Single"
                        />
                        <FormControlLabel
                          control={
                            <Radio
                              checked={civilStatus === "married"}
                              onChange={(e) => setCivilStatus(e.target.value)}
                              value="married"
                            />
                          }
                          label="Married"
                        />
                      </Stack>
                      <Stack>
                        <FormControlLabel
                          control={
                            <Radio
                              checked={civilStatus === "widower"}
                              onChange={(e) => setCivilStatus(e.target.value)}
                              value="widower"
                            />
                          }
                          label="Widower"
                        />
                        <FormControlLabel
                          control={
                            <Radio
                              checked={civilStatus === "separated"}
                              onChange={(e) => setCivilStatus(e.target.value)}
                              value="separated"
                            />
                          }
                          label="Separated"
                        />
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>

              <Stack spacing={2} direction="row" alignItems="center">
                <TextField
                  size="small"
                  type="text"
                  label="Contact No"
                  variant="outlined"
                  onChange={(e) => setContact(e.target.value)}
                />
                <TextField
                  size="small"
                  type="date"
                  label="Birthdate"
                  variant="outlined"
                  onChange={(e) => setBirthdate(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ p: 0, m: 0 }} />
                    ),
                  }}
                />
                <TextField
                  sx={{ width: "120px" }}
                  size="small"
                  type="number"
                  label="Age"
                  variant="outlined"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Stack>
            </Stack>

            {/* ///////////////////////// */}

            <Stack
              spacing={2}
              sx={{ display: nextOpen2 === true ? "block" : "none" }}
            >
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                sx={{ p: 0, m: 0 }}
              >
                <Autocomplete
                  sx={{ p: 0, m: 0 }}
                  fullWidth
                  size="small"
                  autoHighlight
                  id="highlights-demo"
                  options={searchData}
                  onChange={(e, value) => handleData(value)}
                  renderInput={(params) => (
                    <>
                      <TextField
                        sx={{ p: 0, m: 0 }}
                        {...params}
                        placeholder="Search Room No..."
                        margin="normal"
                      />
                    </>
                  )}
                />
                <TextField
                  value={roomType}
                  fullWidth
                  size="small"
                  type="text"
                  label="Room Type"
                  variant="outlined"
                  onChange={(e, value) => handleData(value)}
                />
                {/* <TextField
                  value={roomPrice}
                  fullWidth
                  size='small'
                  type='number'
                  label='Room Price'
                  variant='outlined'
                  onChange={(e, value) => handleData(value)}
                /> */}
                <TextField
                  value={roomName}
                  fullWidth
                  size="small"
                  type="text"
                  label="Room Name"
                  variant="outlined"
                  onChange={(e, value) => handleData(value)}
                />
              </Stack>

              <Stack spacing={2} direction="row" alignItems="center">
                <TextField
                  fullWidth
                  size="small"
                  name="father"
                  type="text"
                  id="father"
                  label="Father's Name"
                  onChange={(e) => setFatherName(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  name="fatherAddress"
                  type="text"
                  id="fatherAddress"
                  label="Address"
                  variant="outlined"
                  onChange={(e) => setFatherAddress(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  name="fatherContact"
                  type="text"
                  id="fatherContact"
                  label="Contact No"
                  variant="outlined"
                  onChange={(e) => setFatherContact(e.target.value)}
                />
              </Stack>

              <Stack spacing={2} direction="row" alignItems="center">
                <TextField
                  fullWidth
                  size="small"
                  name="mother"
                  type="text"
                  id="mother"
                  label="Mother's Name"
                  variant="outlined"
                  onChange={(e) => setMotherName(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  name="motherAddress"
                  type="text"
                  id="motherAddress"
                  label="Address"
                  variant="outlined"
                  onChange={(e) => setMotherAddress(e.target.value)}
                />
                <TextField
                  fullWidth
                  size="small"
                  name="motherContact"
                  type="text"
                  id="motherContact"
                  label="Contact text"
                  variant="outlined"
                  onChange={(e) => setMotherContact(e.target.value)}
                />
              </Stack>

              <Stack spacing={2} direction="row" alignItems="center">
                <Typography mt={1.5} mb={1} sx={{ fontWeight: 600 }}>
                  Admission
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  sx={{ width: "100%" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    name="admissionDate"
                    type="date"
                    id="admissionDate"
                    variant="outlined"
                    onChange={(e) => setAdmissionDate(e.target.value)}
                  />

                  <TextField
                    fullWidth
                    size="small"
                    name="admissionTime"
                    type="time"
                    id="admissionTime"
                    variant="outlined"
                    onChange={(e) => setAdmissionTime(e.target.value)}
                  />
                </Stack>
              </Stack>
            </Stack>

            {/* ////////////////////////////////////////// */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <>
                <Button
                  onClick={handleClose}
                  id="sign-up"
                  className="btn-bg"
                  variant="contained"
                  sx={{ textTransform: "capitalize", boxShadow: 0 }}
                >
                  cancel
                </Button>
              </>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  onClick={handleOpenNext1}
                  id="sign-up"
                  className="btn-bg"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: 0,
                    display: nextOpen2 === true ? "flex" : "none",
                  }}
                >
                  Prev
                </Button>
                <Button
                  onClick={handleOpenNext2}
                  id="sign-up"
                  className="btn-bg"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: 0,
                    display: nextOpen1 === true ? "flex" : "none",
                  }}
                >
                  next
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: 0,
                    display: nextOpen2 === true ? "flex" : "none",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default PatientEditModal;
