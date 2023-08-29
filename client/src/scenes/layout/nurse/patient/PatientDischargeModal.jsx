import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import {
  Autocomplete,
  Button,
  Card,
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
import { updateToDischargePatient } from "../../../../actions/PatientAction";
import SubmitBox from "../../../../components/SubmitBox";
import { getDoctors } from "../../../../actions/admin/DoctorAction";

const PatientDischargeModal = ({ index }) => {
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
  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeTime, setDischargeTime] = useState("");
  const [totalNoDays, setTotalNoDays] = useState(0);
  const [admissionDiagnosis, setAdmissionDiagnosis] = useState("");
  const [finalDiagnosis, setFinalDiagnosis] = useState("");
  const [otherDiagnosis, setOtherDiagnosis] = useState("");
  const [disposition, setDisposition] = useState("");
  const [results, setResults] = useState("");

  const handleUpdateBasicPatientInfo = (e) => {
    e.preventDefault();
    updateToDischargePatient(
      index,
      dischargeDate,
      dischargeTime,
      totalNoDays,
      admissionDiagnosis,
      finalDiagnosis,
      otherDiagnosis,
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
              display: index.results ? "none" : "block",
            }}>
            Discharge
          </Button>
        }
        mdWidth={700}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleUpdateBasicPatientInfo}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Discharge Patient
            </Typography>
            <Stack spacing={0.5}>
              <Typography sx={{ fontWeight: 600 }}>Discharge</Typography>
              <Stack spacing={2} direction='row' alignItems='center'>
                <TextField
                  required
                  type='date'
                  size='small'
                  fullWidth
                  variant='outlined'
                  onChange={(e) => setDischargeDate(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  size='small'
                  type='time'
                  variant='outlined'
                  onChange={(e) => setDischargeTime(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  size='small'
                  type='number'
                  label='Total No Days'
                  variant='outlined'
                  onChange={(e) => setTotalNoDays(e.target.value)}
                />
              </Stack>
            </Stack>

            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                fullWidth
                required
                size='small'
                type='text'
                label='Admission Diagnosis'
                variant='outlined'
                onChange={(e) => setAdmissionDiagnosis(e.target.value)}
              />
              <TextField
                fullWidth
                required
                size='small'
                type='text'
                label='Final Diagnosis'
                variant='outlined'
                onChange={(e) => setFinalDiagnosis(e.target.value)}
              />

              <TextField
                fullWidth
                required
                size='small'
                type='text'
                label='Other Diagnosis'
                variant='outlined'
                onChange={(e) => setOtherDiagnosis(e.target.value)}
              />
            </Stack>

            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  name='radio-buttons-group'>
                  <Typography sx={{ fontWeight: 600 }}>Disposition</Typography>
                  <Stack spacing={2} direction='row' alignItems='center'>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={disposition === "Discharge"}
                          value='Discharge'
                          onChange={(e) => setDisposition(e.target.value)}
                        />
                      }
                      label='Discharge'
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={disposition === "Transferred"}
                          value='Transferred'
                          onChange={(e) => setDisposition(e.target.value)}
                        />
                      }
                      label='Transferred'
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={disposition === "HAMA"}
                          value='HAMA'
                          onChange={(e) => setDisposition(e.target.value)}
                        />
                      }
                      label='HAMA'
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={disposition === "Absconded"}
                          value='Absconded'
                          onChange={(e) => setDisposition(e.target.value)}
                        />
                      }
                      label='Absconded'
                    />
                  </Stack>
                </RadioGroup>
              </Stack>
            </Stack>

            <Stack spacing={2} direction='row' alignItems='center'>
              <Stack>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  name='radio-buttons-group'>
                  <Typography sx={{ fontWeight: 600 }}>Results</Typography>

                  <Stack>
                    <Stack spacing={2} direction='row' alignItems='center'>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={results === "Recovered"}
                            value='Recovered'
                            onChange={(e) => setResults(e.target.value)}
                          />
                        }
                        label='Recovered'
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={results === "Died"}
                            value='Died'
                            onChange={(e) => setResults(e.target.value)}
                          />
                        }
                        label='Died'
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={results === "Improved"}
                            value='Improved'
                            onChange={(e) => setResults(e.target.value)}
                          />
                        }
                        label='Improved'
                      />
                    </Stack>
                    <Stack spacing={2} direction='row' alignItems='center'>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={results === "Unimproved"}
                            value='Unimproved'
                            onChange={(e) => setResults(e.target.value)}
                          />
                        }
                        label='Unimproved'
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={results === "Less than 48hrs"}
                            value='Less than 48hrs'
                            onChange={(e) => setResults(e.target.value)}
                          />
                        }
                        label='Less than 48hrs'
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={results === "More than 48hrs"}
                            value='More than 48hrs'
                            onChange={(e) => setResults(e.target.value)}
                          />
                        }
                        label='More than 48hrs'
                      />
                    </Stack>
                  </Stack>
                </RadioGroup>
              </Stack>
            </Stack>

            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default PatientDischargeModal;
