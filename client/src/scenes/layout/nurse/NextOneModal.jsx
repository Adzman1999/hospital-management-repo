import { Add, CloseRounded } from "@mui/icons-material";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Card,
  Divider,
  Fade,
  FormControlLabel,
  IconButton,
  InputLabel,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowRight } from "phosphor-react";
import React, { useState } from "react";

const NextOneModal = ({
  nextOpen1,
  sex,
  civilStatus,
  setLastName,
  setFirstName,
  setMiddleName,
  setBedNo,
  setCaseNo,
  setHospitalNo,
  setPermanentAddress,
  setContact,
  setSex,
  setCivilStatus,
  setBirthdate,
  setAge,
  setBirthplace,
  setNationality,
  setReligion,
  setOccupation,
  setFatherName,
  setFatherAddress,
  setFatherContact,
  setMotherName,
  setMotherAddress,
  setMotherContact,
}) => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ display: nextOpen1 === true ? "block" : "none" }}>
        <Typography>Patient's Name</Typography>
        <Stack spacing={2} direction='row'>
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Last Name'
            variant='outlined'
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            type='text'
            label='First Name'
            variant='outlined'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Middle Name'
            variant='outlined'
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row'>
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Bed No'
            variant='outlined'
            onChange={(e) => setBedNo(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Case text'
            variant='outlined'
            onChange={(e) => setCaseNo(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Hospital text'
            variant='outlined'
            onChange={(e) => setHospitalNo(e.target.value)}
          />
        </Stack>
        <Stack spacing={2} direction='row'>
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Permanent Address'
            variant='outlined'
            onChange={(e) => setPermanentAddress(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            type='text'
            label='Contact text'
            variant='outlined'
            onChange={(e) => setContact(e.target.value)}
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row'>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            name='radio-buttons-group'>
            <Typography>Sex</Typography>
            <Stack spacing={2} direction='row'>
              <FormControlLabel
                control={
                  <Radio
                    checked={sex === "male"}
                    value='male'
                    onChange={(e) => setSex(e.target.value)}
                  />
                }
                label='Male'
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={sex === "female"}
                    value='female'
                    onChange={(e) => setSex(e.target.value)}
                  />
                }
                label='Female'
              />
            </Stack>
          </RadioGroup>
          <Divider orientation='vertical' flexItem />
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            name='radio-buttons-group'>
            <Typography>Civil Status</Typography>
            <Stack spacing={2} direction='row'>
              <FormControlLabel
                control={
                  <Radio
                    checked={civilStatus === "single"}
                    onChange={(e) => setCivilStatus(e.target.value)}
                    value='single'
                  />
                }
                label='Single'
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={civilStatus === "married"}
                    onChange={(e) => setCivilStatus(e.target.value)}
                    value='married'
                  />
                }
                label='Married'
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={civilStatus === "widower"}
                    onChange={(e) => setCivilStatus(e.target.value)}
                    value='widower'
                  />
                }
                label='Widower'
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={civilStatus === "separated"}
                    onChange={(e) => setCivilStatus(e.target.value)}
                    value='separated'
                  />
                }
                label='Separated'
              />
            </Stack>
          </RadioGroup>
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row' alignItems='center'>
          <InputLabel sx={{ width: 150 }} htmlFor='birthdate'>
            Birthdate
          </InputLabel>
          <TextField
            sx={{ width: 320 }}
            size='small'
            name='birthdate'
            type='date'
            id='birthdate'
            variant='outlined'
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <TextField
            sx={{ width: 200 }}
            size='small'
            name='age'
            type='text'
            id='age'
            placeholder='age'
            variant='outlined'
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='birthplace'
            type='text'
            id='birthplace'
            label='Birthplace'
            variant='outlined'
            onChange={(e) => setBirthplace(e.target.value)}
          />
        </Stack>
        <Stack spacing={2} direction='row'>
          <TextField
            fullWidth
            size='small'
            name='nationality'
            type='text'
            id='nationality'
            label='Nationality'
            variant='outlined'
            onChange={(e) => setNationality(e.target.value)}
          />

          <TextField
            fullWidth
            size='small'
            name='religion'
            type='text'
            id='religion'
            label='Religion'
            variant='outlined'
            onChange={(e) => setReligion(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='occupation'
            type='text'
            id='occupation'
            label='Occupation'
            variant='outlined'
            onChange={(e) => setOccupation(e.target.value)}
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction='row'>
          <TextField
            fullWidth
            size='small'
            name='father'
            type='text'
            id='father'
            label="Father's Name"
            onChange={(e) => setFatherName(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='fatherAddress'
            type='text'
            id='fatherAddress'
            label='Address'
            variant='outlined'
            onChange={(e) => setFatherAddress(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='fatherContact'
            type='text'
            id='fatherContact'
            label='Contact text'
            variant='outlined'
            onChange={(e) => setFatherContact(e.target.value)}
          />
        </Stack>
        <Stack spacing={2} direction='row'>
          <TextField
            fullWidth
            size='small'
            name='mother'
            type='text'
            id='mother'
            label="Mother's Name"
            variant='outlined'
            onChange={(e) => setMotherName(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='motherAddress'
            type='text'
            id='motherAddress'
            label='Address'
            variant='outlined'
            onChange={(e) => setMotherAddress(e.target.value)}
          />
          <TextField
            fullWidth
            size='small'
            name='motherContact'
            type='text'
            id='motherContact'
            label='Contact text'
            variant='outlined'
            onChange={(e) => setMotherContact(e.target.value)}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default NextOneModal;
