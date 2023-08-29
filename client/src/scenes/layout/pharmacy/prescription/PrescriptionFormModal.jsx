import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { AddPrescription } from "../../../../actions/pharmacy/PrescriptionAction";
import { getPatients } from "../../../../actions/PatientAction";
import {
  getMedicines,
  updateStock,
} from "../../../../actions/pharmacy/MedicineAction";
import { SmileySad } from "phosphor-react";

const PrescriptionFormModal = () => {
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
  const [prescriptionId, setPrescriptionId] = useState("");
  const [patientName, setPatientName] = useState("");

  const [medicineNAme, setMedicineNAme] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [prescription, setPrescription] = useState([]);

  useEffect(() => {
    getPatients(setSearchResult);
  }, [searchResult]);

  useEffect(() => {
    getMedicines(setSearchResult1);
  }, []);

  const handleData = (data) => {
    try {
      setPrescriptionId(data.id);
      setPatientName(data.label);
      setPrescription(data.doctorPrescription);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
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
      setMedicineNAme("");
      setBrand("");
      setQuantity(0);
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
      id: searchResult[i]._id,
      label:
        searchResult[i].firstName +
        " " +
        searchResult[i].middleName +
        " " +
        searchResult[i].lastName,
      doctorPrescription: searchResult[i].doctorPrescription,
    });
  }

  const handleAddPrescription = (e) => {
    e.preventDefault();
    if (stock <= quantity) {
      setErr("You've Entered Maximum Stock Of Medicine!");
      handleSnackbarOpenError();
    } else {
      AddPrescription(
        prescriptionId,
        medicineNAme,
        brand,
        quantity,
        price,
        setErr,
        handleSnackbarOpenError,
        setSucceed,
        handleSnackbarOpenSuccess
      );
      updateStock(stockId, stock, quantity);
    }
  };

  return (
    <>
      <ModalComponent
        open={open}
        icon={
          <Tooltip title="Add Prescription">
            <IconButton
              sx={{ zIndex: 100 }}
              onClick={handleOpen}
              size="small"
              variant="outlined"
            >
              <Add
                color="primary"
                sx={{
                  fontSize: 40,
                  border: "4px solid #90CAF9",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </Tooltip>
        }
        mdWidth={800}
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
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component="form"
          onSubmit={handleAddPrescription}
        >
          <Stack spacing={2}>
            <Stack mt={2}>
              <Typography
                color="primary"
                variant="h5"
                sx={{ fontWeight: 600 }}
                mb={1}
              >
                Add Prescription
              </Typography>
              <Autocomplete
                sx={{ p: 0, m: 0 }}
                fullWidth
                size="small"
                autoHighlight
                options={searchData}
                onChange={(e, value) => handleData(value)}
                value={patientName}
                renderInput={(params) => (
                  <>
                    <TextField
                      {...params}
                      placeholder="Search Patient..."
                      margin="normal"
                      required
                      sx={{ p: 0, m: 0 }}
                    />
                  </>
                )}
              />
            </Stack>
            {prescription.length === 0 ? (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    border: "2px dashed rgb(250, 85, 23)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    p: 1,
                    width: "100%",
                    gap: 1,
                  }}
                >
                  <SmileySad
                    style={{ fontSize: 20, color: "rgb(250, 85, 23)" }}
                  />
                  <Typography
                    color="rgb(250, 85, 23)"
                    textTransform="uppercase"
                    variant="body1"
                    fontWeight={500}
                  >
                    No doctor's prescription Yet
                  </Typography>
                </Box>
              </Stack>
            ) : (
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
                    {prescription.map((dp) => (
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
            )}

            <Stack spacing={2}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Autocomplete
                  sx={{ p: 0, m: 0 }}
                  fullWidth
                  size="small"
                  autoHighlight
                  options={medicineData}
                  onChange={(e, value) => handleData1(value)}
                  value={medicineNAme}
                  renderInput={(params) => (
                    <>
                      <TextField
                        {...params}
                        placeholder="Search Medicine..."
                        margin="normal"
                        required
                        sx={{ p: 0, m: 0 }}
                      />
                    </>
                  )}
                />
                <Divider orientation="vertical" flexItem />
                <Button
                  onClick={() => {
                    setMedicineNAme("");
                    setBrand("");
                    setQuantity(0);
                    setPrice(0);
                  }}
                  variant="outlined"
                  sx={{ textTransform: "capitalize", width: 200 }}
                >
                  Add more
                </Button>
              </Stack>

              <TextField
                fullWidth
                required
                value={quantity}
                size="small"
                type="number"
                label="Set Quantity"
                variant="standard"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                fullWidth
                value={price * quantity}
                aria-readonly
                size="small"
                type="number"
                label="Total Price"
                variant="standard"
                onChange={(e, value) => handleData1(value)}
              />

              <TextField
                fullWidth
                value={brand}
                aria-readonly
                size="small"
                type="text"
                label="Brand Name"
                variant="standard"
                onChange={(e, value) => handleData1(value)}
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Button
                  onClick={() => {
                    handleClose();
                    setPatientName("");
                    setMedicineNAme("");
                    setBrand("");
                    setQuantity(0);
                    setPrice(0);
                    setPrescription([]);
                  }}
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: 0,
                  }}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: 0,
                  }}
                >
                  Add to prescription
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default PrescriptionFormModal;
