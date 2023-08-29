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
import { AddNurseRemark } from "../../../../actions/PatientAction";
import ModalComponent from "../../../../components/ModalComponent";
import BackBtn from "../../../../components/BackBtn";
import { getNurse } from "../../../../actions/admin/PositionAction";

const PatientRemarkModal = ({ handleMenuClose, index }) => {
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
    setRemark("");
    setNurse("");
    setRemarkDate("");
    setRemarkTime("");
  };

  const handleAddMore = () => {
    setRemark("");
    setNurse("");
    setRemarkDate("");
    setRemarkTime("");
  };

  const [searchResult1, setSearchResult1] = useState([]);
  useEffect(() => {
    getNurse(setSearchResult1);
  }, []);
  const handleData1 = (data) => {
    try {
      setNurse(data.label);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setNurse("");
    }
  };
  let searchData1 = [];
  for (var j = 0; j < searchResult1.length; j++) {
    searchData1.push({
      label:
        searchResult1[j].firstName +
        " " +
        searchResult1[j].middleName +
        " " +
        searchResult1[j].lastName,
    });
  }

  const [remarkDate, setRemarkDate] = useState("");
  const [remarkTime, setRemarkTime] = useState(0);
  const [remark, setRemark] = useState("");
  const [nurse, setNurse] = useState("");

  const handleSubmitPatient = (e) => {
    e.preventDefault();
    AddNurseRemark(remark, nurse, remarkDate, remarkTime, index);
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
        Add Remark
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
              width: { xs: "100%", md: 600 },
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
              <Card
                elevation={0}
                sx={{ background: "transparent" }}
                component="form"
                onSubmit={handleSubmitPatient}
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
                  <TextField
                    required
                    fullWidth
                    size="small"
                    type="text"
                    label="Enter Remark"
                    rows={2}
                    variant="outlined"
                    multiline
                    onChange={(e) => setRemark(e.target.value)}
                  />
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="date"
                      label="Set Remark Date"
                      variant="outlined"
                      onChange={(e) => setRemarkDate(e.target.value)}
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
                      label="Set Remark Time"
                      variant="outlined"
                      onChange={(e) => setRemarkTime(e.target.value)}
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
                  <Autocomplete
                    sx={{ p: 0, m: 0 }}
                    fullWidth
                    size="small"
                    autoHighlight
                    id="highlights-demo"
                    options={searchData1}
                    value={nurse}
                    onChange={(e, value) => handleData1(value)}
                    renderInput={(params) => (
                      <>
                        <TextField
                          sx={{ p: 0, m: 0 }}
                          {...params}
                          placeholder="Search Nurse..."
                          margin="normal"
                          required
                        />
                      </>
                    )}
                  />

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
                            Nurse
                          </TableCell>
                          <TableCell
                            color="primary"
                            sx={{ fontWeight: 600, fontSize: "15px" }}
                          >
                            Remark
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {index.nurseRemark &&
                          index.nurseRemark.map((nr) => (
                            <>
                              <TableRow
                                key={nr._id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {nr.remarkDate +
                                    " " +
                                    "-" +
                                    " " +
                                    nr.remarkTime}
                                </TableCell>
                                <TableCell>{nr.nurse}</TableCell>
                                <TableCell>{nr.remark}x</TableCell>
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
                      Add to Remark List
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

export default PatientRemarkModal;
