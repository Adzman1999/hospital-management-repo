import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";

const NextTwoModal = ({
  nextOpen2,
  typeOfAdmission,
  formerOPD,
  socSerClassification,
  allergicTo,
  setAdmissionDate,
  setAdmissionTime,
  setDischargeDate,
  setDischargeTime,
  setTotalNoDays,
  setAttendingPhysician,
  setTypeOfAdmission,
  setFormerOPD,
  setReferredBy,
  setSocSerClassification,
  setAllergicTo,
  setHospitalization,
  setHealthInsurance,
  setDataFurnishedBy,
  setAddressOfInformant,
  setRelationToPatient,
}) => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ display: nextOpen2 === true ? "block" : "none" }}>
        <Stack spacing={2} direction='row' alignItems='center'>
          <Box sx={{ width: "100%" }}>
            <Typography mt={1.5} mb={1}>
              Admission
            </Typography>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                fullWidth
                size='small'
                name='admissionDate'
                type='date'
                id='admissionDate'
                variant='outlined'
                onChange={(e) => setAdmissionDate(e.target.value)}
              />

              <TextField
                fullWidth
                size='small'
                name='admissionTime'
                type='time'
                id='admissionTime'
                variant='outlined'
                onChange={(e) => setAdmissionTime(e.target.value)}
              />
            </Stack>
          </Box>
          <Divider orientation='vertical' flexItem />
          <Box sx={{ width: "100%" }}>
            <Typography mt={1.5} mb={1}>
              Discharge
            </Typography>
            <Stack spacing={2} direction='row'>
              <TextField
                disabled
                fullWidth
                size='small'
                name='dischargeDate'
                type='date'
                id='dischargeDate'
                variant='outlined'
                onChange={(e) => setDischargeDate(e.target.value)}
              />
              <TextField
                disabled
                fullWidth
                size='small'
                name='dischargeTime'
                type='time'
                id='dischargeTime'
                variant='outlined'
                onChange={(e) => setDischargeTime(e.target.value)}
              />
            </Stack>
          </Box>
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <TextField
            size='small'
            name='totalNoDays'
            type='text'
            id='totalNoDays'
            label='Total No Days'
            variant='outlined'
            onChange={(e) => setTotalNoDays(e.target.value)}
          />

          <TextField
            fullWidth
            size='small'
            name='attendingPhysician'
            type='text'
            id='attendingPhysician'
            label='Attending Physician'
            variant='outlined'
            onChange={(e) => setAttendingPhysician(e.target.value)}
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            name='radio-buttons-group'>
            <Typography>Type Of Admission</Typography>
            <Stack spacing={2} direction='row'>
              <FormControlLabel
                control={
                  <Radio
                    value='new'
                    checked={typeOfAdmission === "new"}
                    onChange={(e) => setTypeOfAdmission(e.target.value)}
                  />
                }
                label='New'
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={typeOfAdmission === "old"}
                    value='old'
                    onChange={(e) => setTypeOfAdmission(e.target.value)}
                  />
                }
                label='Old'
              />
            </Stack>
          </RadioGroup>
          <Divider orientation='vertical' flexItem />
          <Box sx={{ width: 200 }}>
            <Typography>Former OPD</Typography>
            <Checkbox
              checked={formerOPD === "yes"}
              value='yes'
              onChange={(e) => setFormerOPD(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>

          <Divider orientation='vertical' flexItem />
          <Box sx={{ width: "100%" }}>
            <Typography>Referred By</Typography>
            <TextField
              mt={1}
              fullWidth
              size='small'
              name='refBy'
              type='text'
              id='refBy'
              placeholder='Physician/Agency'
              variant='outlined'
              onChange={(e) => setReferredBy(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton type='submit' className='sub-text-color'>
                      <MagnifyingGlass fontSize='15px' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <Typography sx={{ width: 250 }}>
            Social Service Classification
          </Typography>
          <Stack alignItems='center' direction='row'>
            <Typography>A:</Typography>
            <Checkbox
              value='A'
              checked={socSerClassification === "A"}
              onChange={(e) => setSocSerClassification(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Stack>
          <Stack alignItems='center' direction='row'>
            <Typography>B:</Typography>
            <Checkbox
              value='B'
              checked={socSerClassification === "B"}
              onChange={(e) => setSocSerClassification(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Stack>
          <Stack alignItems='center' direction='row'>
            <Typography>C:</Typography>
            <Checkbox
              value='C'
              checked={socSerClassification === "C"}
              onChange={(e) => setSocSerClassification(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Stack>
        </Stack>
        <Divider />

        <Stack spacing={2} direction='row' alignItems='center'>
          <Typography sx={{ width: 150 }}>Allergic To</Typography>
          <Stack alignItems='center' direction='row' sx={{ width: 180 }}>
            <Typography sx={{ fontWeight: 600 }}>NKA (-):</Typography>
            <Checkbox
              checked={allergicTo === "negative"}
              value='negative'
              onChange={(e) => setAllergicTo(e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack alignItems='center' direction='row' sx={{ width: "100%" }}>
            <Typography sx={{ fontWeight: 600 }}>(+):</Typography>
            <TextField
              fullWidth
              size='small'
              name='positive'
              type='text'
              id='positive'
              label='Allergy Type'
              variant='outlined'
              onChange={(e) => setAllergicTo(e.target.value)}
            />
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <Stack direction='column' sx={{ width: "100%" }}>
            <Typography sx={{ width: 200 }}>Hospitalization Plan</Typography>
            <TextField
              fullWidth
              size='small'
              name='hosPlan'
              type='text'
              id='hosPlan'
              label='Company/Industrial Name'
              variant='outlined'
              onChange={(e) => setHospitalization(e.target.value)}
            />
          </Stack>

          <Stack direction='column' sx={{ width: "100%" }}>
            <Typography sx={{ width: 200 }}>Health Insurance</Typography>
            <TextField
              fullWidth
              size='small'
              name='insurance'
              type='text'
              id='insurance'
              label='Insurance Name'
              variant='outlined'
              onChange={(e) => setHealthInsurance(e.target.value)}
            />
          </Stack>
        </Stack>
        <Stack spacing={2} direction='row' alignItems='center'>
          <TextField
            fullWidth
            size='small'
            name='dataFurnishedBy'
            type='text'
            id='dataFurnishedBy'
            label='Data Furnished By'
            variant='outlined'
            onChange={(e) => setDataFurnishedBy(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='addressOfInformant'
            type='text'
            id='addressOfInformant'
            label='Address of Informant'
            variant='outlined'
            onChange={(e) => setAddressOfInformant(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='relToPatient'
            type='text'
            id='relToPatient'
            label='Relation to Patient'
            variant='outlined'
            onChange={(e) => setRelationToPatient(e.target.value)}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default NextTwoModal;
