import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import { updatePatientTest } from "../../../../actions/laboratory/PatientTestAction";
import ModalComponent from "../../../../components/ModalComponent";
import SubmitBox from "../../../../components/SubmitBox";
import { getPatients } from "../../../../actions/PatientAction";

const PatientTestEditModal = ({ handleClose1, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [swabTest, setSwabTest] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bagCount, setBagCount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [pregnantTest, setPregnantTest] = useState("");
  const [kidneyDiseases, setKidneyDisease] = useState("");

  const [diabetes, setDiabetes] = useState("");
  const [liverDisease, setLiverDisease] = useState("");
  const [patientBloodType, setPatientBloodType] = useState("");
  const [patientBP, setPatientBP] = useState("");
  const [patientRedBloodCount, setPatientRedBloodCount] = useState("");
  const [patientWhiteBloodCount, setPatientWhiteBloodCount] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [typeOfAdmission, setTypeOfAdmission] = useState("");
  const [patientName, setPatientName] = useState("");
  const [admission, setAdmission] = useState("");
  const [attendingPhysician, setAttendingPhysician] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

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

  useEffect(() => {
    getPatients(setSearchResult);
  }, []);

  const handleCreatePatientTest = (e) => {
    e.preventDefault();
    updatePatientTest(
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
      swabTest,
      bloodType,
      bagCount,
      donorName,
      pregnantTest,
      kidneyDiseases,
      diabetes,
      liverDisease,
      patientBloodType,
      patientBP,
      patientRedBloodCount,
      patientWhiteBloodCount,
      setSwabTest,
      setBloodType,
      setBagCount,
      setDonorName,
      setPregnantTest,
      setKidneyDisease,
      setDiabetes,
      setLiverDisease,
      setPatientBloodType,
      setPatientBP,
      setPatientRedBloodCount,
      setPatientWhiteBloodCount,
      setAge,
      setSex,
      setTypeOfAdmission,
      setPatientName,
      setAdmission,
      setAttendingPhysician,
      setAddress,
      setContact
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
        mdWidth={900}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreatePatientTest}>
          <Stack spacing={2} mb={1} mt={2}>
            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack>
                <Typography variant='h6' color='primary'>
                  Search Patient:
                </Typography>
                <Autocomplete
                  sx={{ width: 200 }}
                  fullWidth
                  size='small'
                  autoHighlight
                  id='highlights-demo'
                  options={searchData}
                  // getOptionLabel={(option) =>
                  //   `${option.firstName} ${option.middleName} ${option.lastName}`
                  // }
                  onChange={(e, value) => handleData(value)}
                  renderInput={(params) => (
                    <>
                      <TextField
                        {...params}
                        placeholder={index.patientName}
                        margin='normal'
                      />
                    </>
                  )}
                />
              </Stack>
              <Divider orientation='vertical' flexItem />
              <Stack spacing={2}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ width: 200 }}>
                  <TextField
                    sx={{ width: 100 }}
                    placeholder={index.age}
                    value={age}
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
                  placeholder={index.contact}
                  value={contact}
                  sx={{ width: 200 }}
                  disabled
                  id='contact'
                  size='small'
                  type='text'
                  label='Contact No.'
                  variant='standard'
                  onChange={(e, value) => handleData(value)}
                />
              </Stack>

              <Stack spacing={2}>
                <TextField
                  placeholder={index.address}
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
                  placeholder={index.admission}
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

              <Stack spacing={2}>
                <TextField
                  placeholder={index.typeOfAdmission}
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
                  placeholder={index.attendingPhysician}
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

            <Stack>
              <Stack spacing={2} direction='row' alignItems='center'>
                <Stack spacing={1}>
                  <Typography variant='h6' color='primary'>
                    Blood Transfusion:
                  </Typography>
                  <Stack spacing={2} direction='row' alignItems='center'>
                    <FormControl sx={{ minWidth: 130 }} size='small'>
                      <InputLabel id='select-blood-type'>Blood Type</InputLabel>
                      <Select
                        value={bloodType}
                        labelId='select-blood-type'
                        id='select-blood-type'
                        label='Blood Type'
                        onChange={(e) => setBloodType(e.target.value)}>
                        <MenuItem value='O'>O</MenuItem>
                        <MenuItem value='A+'>A+</MenuItem>
                        <MenuItem value='A-'>A-</MenuItem>
                        <MenuItem value='B+'>B+</MenuItem>
                        <MenuItem value='B-'>B-</MenuItem>
                        <MenuItem value='AB+'>AB+</MenuItem>
                        <MenuItem value='AB-'>AB-</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      placeholder={index.bloodTransfusion.bagCount}
                      value={bagCount}
                      sx={{ width: 130 }}
                      size='small'
                      type='text'
                      label='Bag Count'
                      variant='outlined'
                      onChange={(e) => setBagCount(e.target.value)}
                    />

                    <TextField
                      placeholder={index.bloodTransfusion.donorName}
                      value={donorName}
                      size='small'
                      type='text'
                      label="Donor's Name"
                      variant='outlined'
                      onChange={(e) => setDonorName(e.target.value)}
                    />
                  </Stack>
                </Stack>
                <Divider orientation='vertical' flexItem />
                <Stack spacing={1}>
                  <Typography variant='h6' color='primary'>
                    Swab Test:
                  </Typography>
                  <Stack spacing={2} direction='row' alignItems='center'>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue={index.swabTest}
                        name='radio-buttons-group'>
                        <Stack spacing={2} direction='row'>
                          <Typography color='primary'>COVID-19:</Typography>
                          <FormControlLabel
                            value='negative'
                            control={
                              <Radio
                                onChange={(e) => setSwabTest(e.target.value)}
                              />
                            }
                            label='Negative'
                          />
                          <FormControlLabel
                            value='positive'
                            control={
                              <Radio
                                onChange={(e) => setSwabTest(e.target.value)}
                              />
                            }
                            label='Positive'
                          />
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Divider />
            <Stack spacing={1}>
              <Typography variant='h6' color='primary'>
                Urine Test:
              </Typography>
              <Stack spacing={2} direction='row' alignItems='center'>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <RadioGroup
                    defaultValue={index.urineTest.pregnant}
                    aria-labelledby='demo-radio-buttons-group-label'
                    name='radio-buttons-group'>
                    <Stack spacing={2} direction='row' alignItems='center'>
                      <Typography sx={{ fontWeight: 600 }} color='primary'>
                        Pregnant:
                      </Typography>
                      <FormControlLabel
                        value='negative'
                        control={
                          <Radio
                            disabled={index.sex === "male" ? true : false}
                            onChange={(e) => setPregnantTest(e.target.value)}
                          />
                        }
                        label='Negative'
                      />
                      <FormControlLabel
                        value='positive'
                        control={
                          <Radio
                            disabled={index.sex === "male" ? true : false}
                            onChange={(e) => setPregnantTest(e.target.value)}
                          />
                        }
                        label='Positive'
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>

                <Divider orientation='vertical' flexItem />
                <Stack spacing={2} direction='row' alignItems='center'>
                  <RadioGroup
                    defaultValue={index.urineTest.kidneyDiseases}
                    aria-labelledby='demo-radio-buttons-group-label'
                    name='radio-buttons-group'>
                    <Stack spacing={2} direction='row' alignItems='center'>
                      <Typography sx={{ fontWeight: 600 }} color='primary'>
                        Kidney Disease:
                      </Typography>
                      <FormControlLabel
                        value='negative'
                        control={
                          <Radio
                            onChange={(e) => setKidneyDisease(e.target.value)}
                          />
                        }
                        label='Negative'
                      />
                      <FormControlLabel
                        value='positive'
                        control={
                          <Radio
                            onChange={(e) => setKidneyDisease(e.target.value)}
                          />
                        }
                        label='Positive'
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={2} direction='row' alignItems='center'>
              <RadioGroup
                defaultValue={index.urineTest.diabetes}
                aria-labelledby='demo-radio-buttons-group-label'
                name='radio-buttons-group'>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <Typography sx={{ fontWeight: 600 }} color='primary'>
                    Diabetes:
                  </Typography>
                  <FormControlLabel
                    value='negative'
                    control={
                      <Radio onChange={(e) => setDiabetes(e.target.value)} />
                    }
                    label='Negative'
                  />
                  <FormControlLabel
                    value='positive'
                    control={
                      <Radio onChange={(e) => setDiabetes(e.target.value)} />
                    }
                    label='Positive'
                  />
                </Stack>
              </RadioGroup>

              <Divider orientation='vertical' flexItem />
              <RadioGroup
                defaultValue={index.urineTest.liverDisease}
                aria-labelledby='demo-radio-buttons-group-label'
                name='radio-buttons-group'>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <Typography sx={{ fontWeight: 600 }} color='primary'>
                    Liver Disease:
                  </Typography>
                  <FormControlLabel
                    value='negative'
                    control={
                      <Radio
                        onChange={(e) => setLiverDisease(e.target.value)}
                      />
                    }
                    label='Negative'
                  />
                  <FormControlLabel
                    value='positive'
                    control={
                      <Radio
                        onChange={(e) => setLiverDisease(e.target.value)}
                      />
                    }
                    setDiabetes
                    label='Positive'
                  />
                </Stack>
              </RadioGroup>
            </Stack>

            <Divider />
            <Stack spacing={1}>
              <Typography variant='h6' color='primary'>
                Blood Test:
              </Typography>
              <Stack spacing={2} direction='row' alignItems='center'>
                <FormControl sx={{ minWidth: 130 }} size='small'>
                  <InputLabel id='select-blood-type'>Blood Type</InputLabel>
                  <Select
                    labelId='select-blood-type'
                    id='select-blood-type'
                    value={patientBloodType}
                    label='Blood Type'
                    onChange={(e) => setPatientBloodType(e.target.value)}>
                    <MenuItem value='O'>O</MenuItem>
                    <MenuItem value='A+'>A+</MenuItem>
                    <MenuItem value='A-'>A-</MenuItem>
                    <MenuItem value='B+'>B+</MenuItem>
                    <MenuItem value='B-'>B-</MenuItem>
                    <MenuItem value='AB+'>AB+</MenuItem>
                    <MenuItem value='AB-'>AB-</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  placeholder={index.bloodTest.bloodPressure}
                  value={patientBP}
                  size='small'
                  type='text'
                  label='Blood Pressure'
                  variant='outlined'
                  onChange={(e) => setPatientBP(e.target.value)}
                />

                <Divider orientation='vertical' flexItem />

                <Typography sx={{ fontWeight: 600 }} color='primary'>
                  Blood Count:
                </Typography>
                <TextField
                  placeholder={index.bloodTest.bloodCount.white}
                  value={patientWhiteBloodCount}
                  size='small'
                  type='text'
                  label='White Blood'
                  variant='outlined'
                  onChange={(e) => setPatientWhiteBloodCount(e.target.value)}
                />
                <TextField
                  placeholder={index.bloodTest.bloodCount.red}
                  value={setPatientRedBloodCount}
                  size='small'
                  type='text'
                  label='Red Blood'
                  variant='outlined'
                  onChange={(e) => setPatientRedBloodCount(e.target.value)}
                />
              </Stack>
            </Stack>

            <Divider />
            <SubmitBox open={open} handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default PatientTestEditModal;
