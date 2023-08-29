import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Card,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Tooltip,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ModalComponent from "../../../../components/ModalComponent";
import { createPatientTest } from "../../../../actions/laboratory/PatientTestAction";
import { getPatients } from "../../../../actions/PatientAction";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import { SmileySad } from "phosphor-react";

const PatientTestFormModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [swabTestResult, setSwabTestResult] = useState("");
  const [swabTestPrice, setSwabTestPrice] = useState("");
  const [TransfusionBloodType, setTransfusionBloodType] = useState("");
  const [TransfusionBagCount, setTransfusionBagCount] = useState(0);
  const [TransfusionDonorName, setTransfusionDonorName] = useState("");
  const [pregnantUrineTest, setPregnantUrineTest] = useState("");
  const [kidneyDiseasesUrineTest, setKidneyDiseaseUrineTest] = useState("");

  const [diabetesUrineTest, setDiabetesUrineTest] = useState("");
  const [liverDiseaseUrineTest, setLiverDiseaseUrineTest] = useState("");
  const [urineTestPrice, setUrineTestPrice] = useState("");
  const [bloodTypeTest, setBloodTypeTest] = useState("");
  const [bloodPressureTest, setBloodPressureTest] = useState("");
  const [whiteBloodCountTest, setWhiteBloodCountTest] = useState(0);
  const [redBloodCountTest, setRedBloodCountTest] = useState(0);
  const [bloodTestPrice, setBloodTestPrice] = useState(0);
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [sex, setSex] = useState("");
  const [remark, setRemark] = useState("");
  const [doctorFee, setDoctorFee] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

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

  useEffect(() => {
    getPatients(setSearchResult);
  }, []);

  const handleCreatePatientTest = (e) => {
    e.preventDefault();
    createPatientTest(
      handleClose,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      swabTestPrice,
      swabTestResult,
      TransfusionBloodType,
      TransfusionBagCount,
      TransfusionDonorName,
      pregnantUrineTest,
      kidneyDiseasesUrineTest,
      diabetesUrineTest,
      liverDiseaseUrineTest,
      urineTestPrice,
      bloodTypeTest,
      bloodPressureTest,
      whiteBloodCountTest,
      redBloodCountTest,
      bloodTestPrice,
      remark,
      patientId,
      setSwabTestResult,
      setSwabTestPrice,
      setTransfusionBloodType,
      setTransfusionBagCount,
      setTransfusionDonorName,
      setPregnantUrineTest,
      setKidneyDiseaseUrineTest,
      setDiabetesUrineTest,
      setLiverDiseaseUrineTest,
      setUrineTestPrice,
      setBloodTypeTest,
      setBloodPressureTest,
      setWhiteBloodCountTest,
      setRedBloodCountTest,
      setBloodTestPrice,
      setRemark
    );
  };

  const handleData = (data) => {
    try {
      setPatientName(data.label);
      setPatientId(data.id);
      setSex(data.sex);
      setDoctorFee(data.doctorFee)
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setPatientName("");
    }
  };

  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      id: searchResult[i]._id,
      label:
        searchResult[i].firstName +
        " " +
        searchResult[i].middleName +
        " " +
        searchResult[i].lastName,
      sex: searchResult[i].sex,
      doctorFee: searchResult[i].doctorFee,
    });
  }

  const handleCancel = () => {
    handleClose();
    handleOpenNext1();
    setSwabTestResult("");
    setSwabTestPrice(0);
    setTransfusionBloodType("");
    setTransfusionBagCount(0);
    setTransfusionDonorName("");
    setPregnantUrineTest("");
    setKidneyDiseaseUrineTest("");
    setDiabetesUrineTest("");
    setLiverDiseaseUrineTest("");
    setUrineTestPrice(0);
    setBloodTypeTest("");
    setBloodPressureTest("");
    setWhiteBloodCountTest(0);
    setRedBloodCountTest(0);
    setBloodTestPrice(0);
    handleClose();
    setPatientName("");
    setRemark("")
    setDoctorFee([])
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
          <Tooltip title='Add Patient Test'>
            <IconButton
              sx={{ zIndex: 100 }}
              onClick={handleOpen}
              size='small'
              variant='outlined'>
              <Add/>
            </IconButton>
          </Tooltip> 
          
        }
        mdWidth={600}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreatePatientTest}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Add Patient Lab Test
            </Typography>
            <Stack
              spacing={2}
              sx={{ display: nextOpen1 === true ? "block" : "none" }}>
                
              
            <Autocomplete
              sx={{ p: 0, m: 0 }}
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
                    sx={{ p: 0, m: 0 }}
                    {...params}
                    placeholder='Search Patients...'
                    margin='normal'
                    
                  />
                </>
              )}
            />

{doctorFee.length === 0 ? <Stack direction='row' justifyContent='center' alignItems='center'>
                            <Box sx={{border: '2px dashed rgb(250, 85, 23)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', p: 1, width: '100%', gap: 1}}>
                              <SmileySad style={{fontSize: 20, color: 'rgb(250, 85, 23)'}} />
                              <Typography color='rgb(250, 85, 23)' textTransform='uppercase' variant="body1" fontWeight={500}>No doctor Yet</Typography>
                            </Box>
                          
                          </Stack> : 

              <TableContainer
                    component={Box}
                    sx={{
                        maxHeight: "200px",
                        overflowX: { xs: "shown", md: "hidden" },
                        height: "100%",
                        "::-webkit-scrollbar ": {
                            width: "3px",
                            height: { xs: "3px", md: "0px" },
                        },
                        "::-webkit-scrollbar-thumb": {
                            backgroundColor: "#1565c08f",
                        },
                    }}>
                    <Table
                        stickyHeader
                        aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    color='primary'
                                    sx={{ fontWeight: 600, fontSize: "15px" }}>
                                    Date/Time
                        </TableCell>
                                <TableCell
                                    color='primary'
                                    sx={{ fontWeight: 600, fontSize: "15px" }}>
                                    Doctor
                        </TableCell>
                                <TableCell
                                    color='primary'
                                    sx={{ fontWeight: 600, fontSize: "15px" }}>
                                    Fee
                        </TableCell>
                                <TableCell
                                    color='primary'
                                    sx={{ fontWeight: 600, fontSize: "15px" }}>
                                    department
                        </TableCell>
                                <TableCell
                                    color='primary'
                                    sx={{ fontWeight: 600, fontSize: "15px" }}>
                                    specialist
                        </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {doctorFee &&
                                doctorFee.map((dp) => (
                                    <>
                                        <TableRow
                                            key={dp._id}
                                            sx={{
                                                "&:last-child td, &:last-child th": {
                                                    border: 0,
                                                },
                                            }}>
                                            <TableCell component='th' scope='row'>
                                                {dp.feeDate + " " + "-" + " " + dp.feeTime}
                                            </TableCell>
                                            <TableCell>{dp.attendingPhysician}</TableCell>
                                            <TableCell>PHP{dp.consultationFee}</TableCell>
                                            <TableCell>{dp.department}</TableCell>
                                            <TableCell>{dp.specialist}</TableCell>
                                        </TableRow>
                                    </>
                                ))}
                        </TableBody>
                    </Table>
                                          </TableContainer> }

            <Stack>
              <Typography variant='body1' sx={{ fontWeight: 600 }}>
                Swab Test:
              </Typography>
              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                sx={{ width: "100%" }}>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-swab-test'>Covid-19</InputLabel>
                  <Select
                    
                    labelId='select-swab-test'
                    id='select-swab-test'
                    value={swabTestResult}
                    label='Covid-19'
                    onChange={(e) => setSwabTestResult(e.target.value)}>
                    <MenuItem value='Negative'>Negative</MenuItem>
                    <MenuItem value='Positive'>Positive</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  
                  fullWidth
                  size='small'
                  type='number'
                  label='Swab Price'
                  variant='outlined'
                  onChange={(e) => setSwabTestPrice(e.target.value)}
                />
              </Stack>
            </Stack>

            <Stack>
              <Typography variant='body1' sx={{ fontWeight: 600 }}>
                Urine Test:
              </Typography>
              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                sx={{ width: "100%" }}>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-pregnant-type'>Pregnant</InputLabel>
                  <Select
                    
                    labelId='select-pregnant-type'
                    id='select-pregnant-type'
                    value={pregnantUrineTest}
                    label='Pregnant'
                    onChange={(e) => setPregnantUrineTest(e.target.value)}>
                    <MenuItem value='Negative'>{sex === 'male' ? "N/A" : "Negative"}</MenuItem>
                    <MenuItem value='Positive'>{sex === 'male' ? "N/A" : "Positive"}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-urine-test'>Diabetes</InputLabel>
                  <Select
                    
                    labelId='select-urine-test'
                    id='select-urine-test'
                    value={diabetesUrineTest}
                    label='Diabetes'
                    onChange={(e) => setDiabetesUrineTest(e.target.value)}>
                    <MenuItem value='Negative'>Negative</MenuItem>
                    <MenuItem value='Positive'>Positive</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  
                  fullWidth
                  size='small'
                  type='number'
                  label='Price'
                  variant='outlined'
                  onChange={(e) => setUrineTestPrice(e.target.value)}
                />
              </Stack>

              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                sx={{ width: "100%", mt: 1 }}>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-kidney-test'>
                    Kidney Disease
                  </InputLabel>
                  <Select
                    
                    labelId='select-kidney-test'
                    id='select-kidney-test'
                    value={kidneyDiseasesUrineTest}
                    label='Kidney Disease'
                    onChange={(e) => setKidneyDiseaseUrineTest(e.target.value)}>
                    <MenuItem value='Negative'>Negative</MenuItem>
                    <MenuItem value='Positive'>Positive</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-urine-test'>Liver Disease</InputLabel>
                  <Select
                    
                    labelId='select-urine-test'
                    id='select-urine-test'
                    value={liverDiseaseUrineTest}
                    label='Liver Disease'
                    onChange={(e) => setLiverDiseaseUrineTest(e.target.value)}>
                    <MenuItem value='Negative'>Negative</MenuItem>
                    <MenuItem value='Positive'>Positive</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            </Stack>

            <Stack
              spacing={2}
              sx={{ display: nextOpen2 === true ? "block" : "none" }}>

            <Stack>
              <Typography variant='body1' sx={{ fontWeight: 600 }}>
                Blood Transfusion:
              </Typography>
              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                sx={{ width: "100%" }}>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-blood-type'>Blood Type</InputLabel>
                  <Select
                    labelId='select-blood-type'
                    id='select-blood-type'
                    value={TransfusionBloodType}
                    label='Blood Type'
                    onChange={(e) => setTransfusionBloodType(e.target.value)}>
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
                  fullWidth
                  size='small'
                  type='number'
                  label='Bag Count'
                  variant='outlined'
                  onChange={(e) => setTransfusionBagCount(e.target.value)}
                />
                <TextField
                  fullWidth
                  size='small'
                  type='text'
                  label="Donor's Name"
                  variant='outlined'
                  onChange={(e) => setTransfusionDonorName(e.target.value)}
                />
              </Stack>
            </Stack>


            <Stack>
              <Typography variant='body1' sx={{ fontWeight: 600 }}>
                Blood Test:
              </Typography>
              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                sx={{ width: "100%" }}>
                <FormControl size='small' fullWidth>
                  <InputLabel id='select-p-blood-type'>Blood Type</InputLabel>
                  <Select
                    
                    labelId='select-p-blood-type'
                    id='select-p-blood-type'
                    value={bloodTypeTest}
                    label='Blood Type'
                    onChange={(e) => setBloodTypeTest(e.target.value)}>
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
                  
                  fullWidth
                  size='small'
                  type='text'
                  label='Blood Pressure'
                  variant='outlined'
                  onChange={(e) => setBloodPressureTest(e.target.value)}
                />
                <TextField
                  
                  fullWidth
                  size='small'
                  type='number'
                  label='Price'
                  variant='outlined'
                  onChange={(e) => setBloodTestPrice(e.target.value)}
                />
              </Stack>

              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                sx={{ width: "100%", mt: 1 }}>
                <TextField
                  fullWidth
                  size='small'
                  type='number'
                  label='Red Blood Count'
                  variant='outlined'
                  onChange={(e) => setRedBloodCountTest(e.target.value)}
                />
                <TextField
                  fullWidth
                  size='small'
                  type='number'
                  label='White Blood Count'
                  variant='outlined'
                  onChange={(e) => setWhiteBloodCountTest(e.target.value)}
                />
              </Stack>
              </Stack>
              <TextField
                  fullWidth
                  multiline
                  rows={3}
                  type='text'
                  label='Enter Remark'
                  variant='outlined'
                  onChange={(e) => setRemark(e.target.value)}
                />
            </Stack>


                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'>
                    <>
                      <Button
                        onClick={handleCancel}
                        id='sign-up'
                        className='btn-bg'
                        variant='contained'
                        sx={{ textTransform: "capitalize", boxShadow: 0 }}>
                        cancel
                      </Button>
                    </>
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <Button
                        onClick={handleOpenNext1}
                        id='sign-up'
                        className='btn-bg'
                        variant='contained'
                        sx={{
                          textTransform: "capitalize",
                          boxShadow: 0,
                          display: nextOpen2 === true ? "flex" : "none",
                        }}>
                        Prev
                      </Button>
                      <Button
                        onClick={handleOpenNext2}
                        id='sign-up'
                        className='btn-bg'
                        variant='contained'
                        sx={{
                          textTransform: "capitalize",
                          boxShadow: 0,
                          display: nextOpen1 === true ? "flex" : "none",
                        }}>
                        next
                      </Button>
                      <Button
                        type='submit'
                        variant='contained'
                        sx={{
                          textTransform: "capitalize",
                          boxShadow: 0,
                          display: nextOpen2 === true ? "flex" : "none",
                        }}>
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

export default PatientTestFormModal;
