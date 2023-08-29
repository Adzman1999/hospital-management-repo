import {
  Box,
  Checkbox,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const NextThreeModal = ({
  nextOpen3,
  setAdmissionDiagnosis,
  setAdmissionDiagnosisICDCodeNO,
  setFinalDiagnosis,
  setFinalDiagnosisICDCodeNO,
  setOtherDiagnosis,
  setOtherDiagnosisICDCodeNO,
  setDisposition,
  setResults,
}) => {
  return (
    <>
      <Stack
        mt={1}
        spacing={2}
        sx={{ display: nextOpen3 === true ? "block" : "none" }}>
        <Stack spacing={2} direction='row' alignItems='center'>
          <TextField
            fullWidth
            size='small'
            name='admissionDiagnosis'
            type='text'
            id='admissionDiagnosis'
            variant='outlined'
            label='Admission Diagnosis'
            onChange={(e) => setAdmissionDiagnosis(e.target.value)}
          />

          <TextField
            size='small'
            name='admissionICDCodeNo'
            type='text'
            id='admissionICDCodeNo'
            label='ICD Code No'
            variant='outlined'
            onChange={(e) => setAdmissionDiagnosisICDCodeNO(e.target.value)}
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <TextField
            fullWidth
            size='small'
            disabled
            name='finalDiagnosis'
            type='text'
            id='finalDiagnosis'
            variant='outlined'
            label='Final Diagnosis '
            onChange={(e) => setFinalDiagnosis(e.target.value)}
          />
          <TextField
            size='small'
            disabled
            name='finalICDCodeNo'
            type='text'
            id='finalCDCodeNo'
            label='ICD Code No'
            variant='outlined'
            onChange={(e) => setFinalDiagnosisICDCodeNO(e.target.value)}
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <TextField
            fullWidth
            size='small'
            disabled
            name='otherDiagnosis'
            type='text'
            id='otherDiagnosis'
            variant='outlined'
            label='Other Diagnosis '
            onChange={(e) => setOtherDiagnosis(e.target.value)}
          />
          <TextField
            size='small'
            disabled
            name='otherICDCodeNo'
            type='text'
            id='otherICDCodeNo'
            label='ICD Code No'
            variant='outlined'
            onChange={(e) => setOtherDiagnosisICDCodeNO(e.target.value)}
          />
        </Stack>
        <Divider />

        <Stack spacing={2} direction='row' alignItems='center'>
          <Typography>Disposition:</Typography>
          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Discharge'
              onChange={(e) => setResults(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Discharge</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Transferred'
              onChange={(e) => setResults(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Transferred</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='HAMA'
              onChange={(e) => setResults(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>HAMA</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Absconded'
              onChange={(e) => setResults(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Absconded</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <Typography>Results:</Typography>
          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Recovered'
              onChange={(e) => setDisposition(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Recovered</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Died'
              onChange={(e) => setDisposition(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Died</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Improved'
              onChange={(e) => setDisposition(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Improved</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} direction='row' alignItems='center'>
          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Unimproved'
              onChange={(e) => setDisposition(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Unimproved</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='Less than 48hrs'
              onChange={(e) => setDisposition(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Less than 48hrs</Typography>
          </Stack>

          <Divider orientation='vertical' flexItem />

          <Stack direction='row' alignItems='center' sx={{ width: 200 }}>
            <Checkbox
              disabled
              value='More than 48hrs'
              onChange={(e) => setDisposition(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>More than 48hrs</Typography>
          </Stack>
        </Stack>
        <Divider />
      </Stack>
    </>
  );
};

export default NextThreeModal;
