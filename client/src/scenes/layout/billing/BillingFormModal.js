import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Card,
  Fade,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddRounded, EastRounded } from "@mui/icons-material";
import { AddBilling, getPatients } from "../../../actions/PatientAction";
import BillingPrintModal from "./BillingPrintModal";

const BillingFormModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openSuccessBilledOut, setOpenSuccessBilledOut] = useState(false);

  const handleCloseBillOut = () => {
    setOpenSuccessBilledOut(false);
  };

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getPatients(setSearchResult);
  }, []);
  const [patientName, setPatientName] = useState("");
  const [billingId, setBillingId] = useState("");
  const [medicine, setMedicine] = useState([]);
  const [xray, setXray] = useState(0);
  const [room, setRoom] = useState(0);
  const [labTest, setLabTest] = useState([]);
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [hosPlan, setHosPlan] = useState("");
  const [admission, setAdmission] = useState("");
  const [discharge, setDischarge] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [patientType, setPatientType] = useState();
  const [sponsorName, setSponsorName] = useState();
  const [healthInsurance, setHealthInsurance] = useState();
  const [doctorFee, setDoctorFee] = useState([]);
  const [datePaid, setDatePaid] = useState("");

  const handleData = (data) => {
    try {
      setBillingId(data._id);
      setPatientName(data.label);
      setMedicine(data.prescription);
      setXray(data.xrayPrice);
      setRoom(data.roomPrice);
      setLabTest(data.labTest);
      setSex(data.sex);
      setAge(data.age);
      setAddress(data.address);
      setContact(data.contact);
      setHosPlan(data.hosPlan);
      setAdmission(data.admission);
      setDischarge(data.discharge);
      setRoomNumber(data.roomNumber);
      setPatientType(data.patientType);
      setSponsorName(data.sponsorName);
      setSponsorName(data.sponsorName);
      setHealthInsurance(data.healthInsurance);
      setDoctorFee(data.doctorFee);
      setHosPlan(data.hosPlan);
    } catch (error) {}
  };

  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      _id: searchResult[i]._id,
      label:
        searchResult[i].firstName +
        " " +
        searchResult[i].middleName +
        " " +
        searchResult[i].lastName,
      prescription: searchResult[i].prescription,
      xrayPrice: searchResult[i].xrayPrice,
      consultationFee: searchResult[i].consultationFee,
      roomPrice: searchResult[i].roomPrice,
      labTest: searchResult[i].labTest,
      sex: searchResult[i].sex,
      age: searchResult[i].age,
      address: searchResult[i].permanentAddress,
      contact: searchResult[i].contact,
      admission: searchResult[i].admission,
      discharge: searchResult[i].discharge,
      roomNumber: searchResult[i].roomNumber,
      patientType: searchResult[i].formerOPD,
      sponsorName: searchResult[i].sponsorName,
      healthInsurance: searchResult[i].healthInsurance,
      doctorFee: searchResult[i].doctorFee,
      hosPlan: searchResult[i].hosPlan,
    });
  }

  let Price = medicine.reduce((acc, item) => acc + item.price, 0);

  let totalPrice = Price;

  let swabTestPrice = labTest.reduce(
    (acc, item) => acc + item.swabTestPrice,
    0
  );
  let urineTestPrice = labTest.reduce(
    (acc, item) => acc + item.urineTestPrice,
    0
  );
  let bloodTestPrice = labTest.reduce(
    (acc, item) => acc + item.bloodTestPrice,
    0
  );
  let allDoctorFee = doctorFee.reduce(
    (acc, item) => acc + item.consultationFee,
    0
  );
  let totalDue =
    (totalPrice || 0) +
    (allDoctorFee || 0) +
    (room || 0) +
    (xray || 0) +
    (swabTestPrice || 0) +
    (urineTestPrice || 0) +
    (bloodTestPrice || 0);

  const handleCreateBilling = (e) => {
    e.preventDefault();
    AddBilling(datePaid, totalDue, billingId);
    setOpenSuccessBilledOut(true);
  };

  let charge = hosPlan === "Insurance" ? (100 * totalDue) / 100 - 20 : totalDue;
  let discount =
    (hosPlan === "Insurance" && `With ${healthInsurance} insurance(20%)`) ||
    (hosPlan === "Sponsors" && `Sponsored by ${sponsorName}`) ||
    "Self-Pay";

  return (
    <>
      <Tooltip title="Add Billing">
        <IconButton
          sx={{ zIndex: 100 }}
          onClick={handleOpen}
          className="btn-no-bg"
          size="small"
          variant="outlined"
        >
          <AddRounded />
        </IconButton>
      </Tooltip>

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
          {/* <SnackbarMessage
            message={err}
            open={snackbarError}
            handleClose={setSnackBarError}
            severity='error'
          /> */}
          <Stack
            spacing={2}
            sx={{
              width: { xs: "100%", md: 600 },
              background: "transparent",
              zIndex: 2000,
            }}
          >
            <Card
              sx={{
                p: 2,
                display: openSuccessBilledOut === true ? "block" : "none",
              }}
            >
              <Stack spacing={2} alignItems="center" justifyContent="center">
                <Typography color="green" sx={{ fontWeight: 600 }}>
                  Patient successfully billed out!
                </Typography>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography>Click</Typography>
                  <BillingPrintModal
                    datePaid={datePaid}
                    patientName={patientName}
                    xray={xray}
                    allDoctorFee={allDoctorFee}
                    totalPrice={totalPrice}
                    swabTestPrice={swabTestPrice}
                    urineTestPrice={urineTestPrice}
                    bloodTestPrice={bloodTestPrice}
                    sex={sex}
                    age={age}
                    address={address}
                    contact={contact}
                    hosPlan={hosPlan}
                    admission={admission}
                    discharge={discharge}
                    roomNumber={roomNumber}
                    patientType={patientType}
                    room={room}
                    charge={charge}
                    discount={discount}
                  />
                  <Typography>to print</Typography>
                </Stack>
              </Stack>
            </Card>
            <Card sx={{ p: 2 }} component="form" onSubmit={handleCreateBilling}>
              <Stack spacing={2} mb={1} mt={2}>
                <Typography
                  color="primary"
                  variant="h5"
                  sx={{ fontWeight: 600, p: 0, m: 0 }}
                >
                  Add Billing
                </Typography>
                <Stack spacing={2} direction="row">
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
                          label="Search Patients..."
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
                    type="date"
                    label="Set Date Paid"
                    variant="outlined"
                    onChange={(e) => setDatePaid(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ p: 0, m: 0 }} />
                      ),
                    }}
                  />
                </Stack>

                <Stack spacing={2} direction="row" alignItems="center">
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Medicine Total Price"
                    value={totalPrice || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />

                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="X-ray Total Price"
                    value={xray || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Doctor's Fee"
                    value={allDoctorFee || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Room Total Price"
                    value={room || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />
                </Stack>
                <Stack spacing={2} alignItems="center" direction="row">
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Swab Test Price"
                    value={swabTestPrice || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Urine Test Price"
                    value={urineTestPrice || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />
                </Stack>
                <Stack spacing={2} alignItems="center" direction="row">
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Blood Test Price"
                    value={bloodTestPrice || 0}
                    variant="standard"
                    onChange={(e, value) => handleData(value)}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    label="Hospitalization Plan"
                    value={discount}
                    variant="standard"
                    // onChange={(e, value) => handleData(value)}
                  />
                </Stack>
                <Stack spacing={1} alignItems="center" direction="row-reverse">
                  <Typography variant="body2">PHP{charge}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Total Due:
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Button
                    onClick={() => {
                      handleClose();
                      handleCloseBillOut();
                      setPatientName(0);
                      setMedicine([]);
                      setXray(0);
                      setDoctorFee([]);
                      setRoom(0);
                      setLabTest([]);
                      setHosPlan("");
                      setSponsorName("");
                      setDatePaid("");
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
                    Pay
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Fade>
      </Modal>
    </>
  );
};

export default BillingFormModal;
