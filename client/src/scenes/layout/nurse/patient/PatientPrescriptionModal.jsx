import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import {
  Autocomplete,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  IconButton,
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
import ModalComponent from "../../../../components/ModalComponent";
import BackBtn from "../../../../components/BackBtn";
import { getDoctors } from "../../../../actions/admin/DoctorAction";
import { AddDoctorPrescription } from "../../../../actions/PatientAction";

const PatientPrescriptionModal = ({ handleMenuClose, index }) => {
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
    setMedicine("");
    setQty(0);
    setHrsPerIntake("");
    setAttendingPhysician("");
    setPrescribeDate("");
    setPrescribeTime("");
  };

  const handleAddMore = () => {
    setMedicine("");
    setQty(0);
    setHrsPerIntake("");
    setAttendingPhysician("");
    setPrescribeDate("");
    setPrescribeTime("");
  };

  const [searchResult2, setSearchResult2] = useState([]);
  useEffect(() => {
    getDoctors(setSearchResult2);
  }, []);
  const handleData2 = (data) => {
    try {
      setAttendingPhysician(data.label);
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
    });
  }

  const [attendingPhysician, setAttendingPhysician] = useState("");
  const [prescribeDate, setPrescribeDate] = useState("");
  const [prescribeTime, setPrescribeTime] = useState("");
  const [medicine, setMedicine] = useState("");
  const [qty, setQty] = useState(0);
  const [hrsPerIntake, setHrsPerIntake] = useState("");

  const handleSubmitPatient = (e) => {
    e.preventDefault();
    AddDoctorPrescription(
      attendingPhysician,
      medicine,
      qty,
      hrsPerIntake,
      prescribeDate,
      prescribeTime,
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
        Add Prescription
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
                      Add Remark
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
                      onChange={(e, value) => handleData2(value)}
                      value={attendingPhysician}
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
                      required
                      fullWidth
                      size="small"
                      type="text"
                      label="Medicine"
                      variant="outlined"
                      onChange={(e) => setMedicine(e.target.value)}
                    />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="date"
                      label="Set Prescription Date"
                      variant="outlined"
                      onChange={(e) => setPrescribeDate(e.target.value)}
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
                      label="Set Prescription Time"
                      variant="outlined"
                      onChange={(e) => setPrescribeTime(e.target.value)}
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
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="number"
                      label="Set Quantity"
                      variant="outlined"
                      onChange={(e) => setQty(e.target.value)}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="text"
                      label="Set Hours Per Intake"
                      variant="outlined"
                      onChange={(e) => setHrsPerIntake(e.target.value)}
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
                            Medicine
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Qty
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Doctors
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Hrs Per Intake
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {index.doctorPrescription &&
                          index.doctorPrescription.map((dp) => (
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
                                  {dp.prescribeDate +
                                    " " +
                                    "-" +
                                    " " +
                                    dp.prescribeTime}
                                </TableCell>
                                <TableCell>{dp.medicine}</TableCell>
                                <TableCell>{dp.qty}x</TableCell>
                                <TableCell>{dp.attendingPhysician}</TableCell>
                                <TableCell>{dp.hrsPerIntake}</TableCell>
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
                      Add to Prescription List
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

export default PatientPrescriptionModal;
