import { Add, SendOutlined } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  Fade,
  Modal,
  Snackbar,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import NextOneModal from "./NextOneModal";
import NextTwoModal from "./NextTwoModal";
import NextThreeModal from "./NextThreeModal";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { createNewPatients } from "../../../actions/PatientAction";

const ParentModal = () => {
  const [nextOpen1, setNextOpen1] = useState(true);
  const [nextOpen2, setNextOpen2] = useState(false);
  const [nextOpen3, setNextOpen3] = useState(false);

  const handleOpenNext1 = () => {
    setNextOpen1(true);
    setNextOpen2(false);
    setNextOpen3(false);
  };
  const handleOpenNext2 = () => {
    setNextOpen1(false);
    setNextOpen2(true);
    setNextOpen3(false);
  };

  const handleOpenNext3 = () => {
    setNextOpen1(false);
    setNextOpen2(false);
    setNextOpen3(true);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [bedNo, setBedNo] = useState(0);
  const [caseNo, setCaseNo] = useState(0);
  const [hospitalNo, setHospitalNo] = useState(0);
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
  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeTime, setDischargeTime] = useState("");
  const [totalNoDays, setTotalNoDays] = useState("");
  const [attendingPhysician, setAttendingPhysician] = useState("");
  const [typeOfAdmission, setTypeOfAdmission] = useState("");
  const [formerOPD, setFormerOPD] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [socSerClassification, setSocSerClassification] = useState("");
  const [allergicTo, setAllergicTo] = useState("");
  const [hospitalization, setHospitalization] = useState("");
  const [healthInsurance, setHealthInsurance] = useState("");
  const [dataFurnishedBy, setDataFurnishedBy] = useState("");
  const [addressOfInformant, setAddressOfInformant] = useState("");
  const [relationToPatient, setRelationToPatient] = useState("");
  const [admissionDiagnosis, setAdmissionDiagnosis] = useState("");
  const [
    admissionDiagnosisICDCodeNO,
    setAdmissionDiagnosisICDCodeNO,
  ] = useState(0);
  const [finalDiagnosis, setFinalDiagnosis] = useState("");
  const [finalDiagnosisICDCodeNO, setFinalDiagnosisICDCodeNO] = useState(0);
  const [otherDiagnosis, setOtherDiagnosis] = useState("");
  const [otherDiagnosisICDCodeNO, setOtherDiagnosisICDCodeNO] = useState();
  const [disposition, setDisposition] = useState("");
  const [results, setResults] = useState("");

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
  const handleSubmitPatient = (e) => {
    e.preventDefault();

    
      createNewPatients(
        lastName,
        firstName,
        middleName,
        bedNo,
        caseNo,
        hospitalNo,
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
        dischargeDate,
        dischargeTime,
        totalNoDays,
        attendingPhysician,
        typeOfAdmission,
        formerOPD,
        referredBy,
        socSerClassification,
        allergicTo,
        hospitalization,
        healthInsurance,
        dataFurnishedBy,
        addressOfInformant,
        relationToPatient,
        admissionDiagnosis,
        admissionDiagnosisICDCodeNO,
        finalDiagnosis,
        finalDiagnosisICDCodeNO,
        otherDiagnosis,
        otherDiagnosisICDCodeNO,
        disposition,
        results,
        setSucceed,
        handleSnackbarOpenSuccess,
        setErr,
        handleSnackbarOpenError
      
    );
    handleClose();
  };

  return (
    <>
      <Button
        sx={{ textTransform: "capitalize", boxShadow: 0 }}
        onClick={handleOpen}
        className='btn-no-bg'
        size='small'
        variant='outlined'
        startIcon={<Add />}>
        Add Patient
      </Button>

      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(13px)",
        }}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Card
            elevation={3}
            // component='form'
            // onSubmit={registerSubmit}
            sx={{
              width: { xs: "100%", md: 800 },
              boxShadow: 0,
              background: "transparent",
              zIndex: 2000,
            }}>
            <Card
              component='form'
              onSubmit={handleSubmitPatient}
              className='sub-bg'
              sx={{
                boxShadow: 0,
                pr: 2,
                pl: 2,
                pt: 0,
                pb: 2,
                m: 2,
              }}>
              <Stack mb={1} mt={1}>
                <NextOneModal
                  nextOpen1={nextOpen1}
                  sex={sex}
                  civilStatus={civilStatus}
                  setLastName={setLastName}
                  setFirstName={setFirstName}
                  setMiddleName={setMiddleName}
                  setBedNo={setBedNo}
                  setCaseNo={setCaseNo}
                  setHospitalNo={setHospitalNo}
                  setPermanentAddress={setPermanentAddress}
                  setContact={setContact}
                  setSex={setSex}
                  setCivilStatus={setCivilStatus}
                  setBirthdate={setBirthdate}
                  setAge={setAge}
                  setBirthplace={setBirthplace}
                  setNationality={setNationality}
                  setReligion={setReligion}
                  setOccupation={setOccupation}
                  setFatherName={setFatherName}
                  setFatherAddress={setFatherAddress}
                  setFatherContact={setFatherContact}
                  setMotherName={setMotherName}
                  setMotherAddress={setMotherAddress}
                  setMotherContact={setMotherContact}
                />
                <NextTwoModal
                  nextOpen2={nextOpen2}
                  typeOfAdmission={typeOfAdmission}
                  formerOPD={formerOPD}
                  socSerClassification={socSerClassification}
                  allergicTo={allergicTo}
                  setAdmissionDate={setAdmissionDate}
                  setAdmissionTime={setAdmissionTime}
                  setDischargeDate={setDischargeDate}
                  setDischargeTime={setDischargeTime}
                  setTotalNoDays={setTotalNoDays}
                  setAttendingPhysician={setAttendingPhysician}
                  setTypeOfAdmission={setTypeOfAdmission}
                  setFormerOPD={setFormerOPD}
                  setReferredBy={setReferredBy}
                  setSocSerClassification={setSocSerClassification}
                  setAllergicTo={setAllergicTo}
                  setHospitalization={setHospitalization}
                  setHealthInsurance={setHealthInsurance}
                  setDataFurnishedBy={setDataFurnishedBy}
                  setAddressOfInformant={setAddressOfInformant}
                  setRelationToPatient={setRelationToPatient}
                />
                <NextThreeModal
                  nextOpen3={nextOpen3}
                  setAdmissionDiagnosis={setAdmissionDiagnosis}
                  setAdmissionDiagnosisICDCodeNO={
                    setAdmissionDiagnosisICDCodeNO
                  }
                  setFinalDiagnosis={setFinalDiagnosis}
                  setFinalDiagnosisICDCodeNO={setFinalDiagnosisICDCodeNO}
                  setOtherDiagnosis={setOtherDiagnosis}
                  setOtherDiagnosisICDCodeNO={setOtherDiagnosisICDCodeNO}
                  setDisposition={setDisposition}
                  setResults={setResults}
                />
              </Stack>
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Box>
                  <Button
                    onClick={handleClose}
                    id='sign-up'
                    className='btn-bg'
                    variant='contained'
                    sx={{ textTransform: "capitalize", boxShadow: 0 }}>
                    cancel
                  </Button>
                </Box>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <Button
                    startIcon={<ArrowLeft />}
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
                    startIcon={<ArrowLeft />}
                    onClick={handleOpenNext2}
                    id='sign-up'
                    className='btn-bg'
                    variant='contained'
                    sx={{
                      textTransform: "capitalize",
                      boxShadow: 0,
                      display: nextOpen3 === true ? "flex" : "none",
                    }}>
                    Prev
                  </Button>
                  <Button
                    startIcon={<ArrowRight />}
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
                    startIcon={<ArrowRight />}
                    onClick={handleOpenNext3}
                    id='sign-up'
                    className='btn-bg'
                    variant='contained'
                    sx={{
                      textTransform: "capitalize",
                      boxShadow: 0,
                      display: nextOpen2 === true ? "flex" : "none",
                    }}>
                    next
                  </Button>
                  <Button
                    type='submit'
                    endIcon={<SendOutlined />}
                    id='sign-up'
                    className='btn-bg'
                    variant='contained'
                    sx={{
                      textTransform: "capitalize",
                      boxShadow: 0,
                      display: nextOpen3 === true ? "flex" : "none",
                    }}>
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Card>
        </Fade>
      </Modal>

      <Snackbar
        open={snackbarError}
        autoHideDuration={6000}
        onClose={() => {
          setSnackBarError(false);
        }}>
        <Alert
          onClose={() => {
            setSnackBarError(false);
          }}
          severity='error'
          sx={{ width: "100%" }}>
          {err}
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarSuccess}
        autoHideDuration={6000}
        onClose={() => {
          setSnackBarSuccess(false);
        }}>
        <Alert
          onClose={() => {
            setSnackBarSuccess(false);
          }}
          severity='success'
          sx={{ width: "100%" }}>
          {succeed}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ParentModal;
