import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import {
  Autocomplete,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Fade,
  Card,
} from "@mui/material";
import BackBtn from "../../../../components/BackBtn";
import { getDoctors } from "../../../../actions/admin/DoctorAction";
import { AddDoctorFee } from "../../../../actions/PatientAction";

const PatientDoctorFeeModal = ({ handleMenuClose, index }) => {
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

  const handleCancel = () => {
    handleClose();
    setConsultationFee(0);
    setDepartment("");
    setSpecialist("");
    setFeeDate("");
    setFeeTime("");
    setAttendingPhysician("");
  };

  const handleAddMore = () => {
    setConsultationFee(0);
    setDepartment("");
    setSpecialist("");
    setFeeDate("");
    setFeeTime("");
    setAttendingPhysician("");
  };

  const [searchResult2, setSearchResult2] = useState([]);
  useEffect(() => {
    getDoctors(setSearchResult2);
  }, []);
  const handleData2 = (data) => {
    try {
      setAttendingPhysician(data.label);
      setConsultationFee(data.fee);
      setDepartment(data.department);
      setSpecialist(data.specialist);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
    }
  };
  let searchData2 = [];
  for (var k = 0; k < searchResult2.length; k++) {
    searchData2.push({
      label:
        searchResult2[k].firstName +
        " " +
        searchResult2[k].middleName +
        " " +
        searchResult2[k].lastName,
      fee: searchResult2[k].doctorFee,
      department: searchResult2[k].department,
      specialist: searchResult2[k].specialist,
    });
  }

  const [attendingPhysician, setAttendingPhysician] = useState("");
  const [consultationFee, setConsultationFee] = useState(0);
  const [department, setDepartment] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [feeDate, setFeeDate] = useState("");
  const [feeTime, setFeeTime] = useState("");

  const handleSubmitPatient = (e) => {
    e.preventDefault();
    AddDoctorFee(
      attendingPhysician,
      consultationFee,
      department,
      specialist,
      feeDate,
      feeTime,
      index
    );
    setSucceed("Successfully Added!");
    handleSnackbarOpenSuccess();
  };

  return (
    <>
      <Button
        sx={{ textTransform: "capitalize" }}
        variant="outlined"
        size="small"
        onClick={() => {
          handleOpen();
          handleMenuClose();
        }}
      >
        Add Doctor's Fee
      </Button>

      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(13px)",
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card
            elevation={3}
            sx={{
              width: { xs: "100%", md: 800 },
              boxShadow: 0,
              background: "transparent",
              zIndex: 2000,
            }}
          >
            <Card
              className="sub-bg"
              sx={{
                boxShadow: 0,
                pr: 2,
                pl: 2,
                pt: 0,
                pb: 2,
                m: 2,
              }}
            >
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
              <BackBtn handleClose={handleCancel} />
              <Card
                elevation={0}
                sx={{ background: "transparent" }}
                component="form"
                onSubmit={handleSubmitPatient}
              >
                <Stack spacing={2} mt={6} p={2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Add Doctor's fee
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize" }}
                      onClick={handleAddMore}
                    >
                      Add More
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Autocomplete
                      sx={{ p: 0, m: 0 }}
                      fullWidth
                      size="small"
                      autoHighlight
                      id="highlights-demo"
                      options={searchData2}
                      value={attendingPhysician}
                      onChange={(e, value) => handleData2(value)}
                      renderInput={(params) => (
                        <>
                          <TextField
                            sx={{ p: 0, m: 0 }}
                            {...params}
                            placeholder="Search Doctors..."
                            margin="normal"
                            required
                          />
                        </>
                      )}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      type="number"
                      label="Consultation Fee"
                      variant="outlined"
                      onChange={(e, value) => handleData2(value)}
                      value={consultationFee}
                    />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="text"
                      label="Department"
                      variant="outlined"
                      onChange={(e, value) => handleData2(value)}
                      value={department}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="text"
                      label="Specialist"
                      variant="outlined"
                      onChange={(e, value) => handleData2(value)}
                      value={specialist}
                    />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="date"
                      label="Set Date"
                      variant="outlined"
                      onChange={(e) => setFeeDate(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ p: 0, m: 0 }}
                          />
                        ),
                      }}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="time"
                      label="Set Time"
                      variant="outlined"
                      onChange={(e) => setFeeTime(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ p: 0, m: 0 }}
                          />
                        ),
                      }}
                    />
                  </Stack>

                  <TableContainer
                    component={Box}
                    sx={{
                      maxHeight: "260px",
                      overflowX: { xs: "shown", md: "hidden" },
                      height: "100%",
                      "::-webkit-scrollbar ": {
                        width: "3px",
                        height: { xs: "3px", md: "0px" },
                      },
                      "::-webkit-scrollbar-thumb": {
                        backgroundColor: "#1565c08f",
                      },
                    }}
                  >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Date/Time
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Doctor
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Fee
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            department
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            specialist
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {index.doctorFee &&
                          index.doctorFee.map((dp) => (
                            <>
                              <TableRow
                                key={dp._id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
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
                  </TableContainer>
                  <Stack direction="row-reverse">
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                      type="submit"
                    >
                      Add to Doctor's Fee List
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Card>
          </Card>
        </Fade>
      </Modal>
    </>
  );
};

export default PatientDoctorFeeModal;
