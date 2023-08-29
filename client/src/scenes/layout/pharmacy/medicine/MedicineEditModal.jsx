import React, { useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import {
  Button,
  Card,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { updateMedicine } from "../../../../actions/pharmacy/MedicineAction";
import SubmitBox from "../../../../components/SubmitBox";

const MedicineEditModal = ({ index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [medicineNAme, setMedicineNAme] = useState("");
  const [brand, setBrand] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [expiration, setExpiration] = useState("");
  const [dateOrdered, setDateOrdered] = useState("");
  const [dateArrived, setDateArrived] = useState("");
  const [dosage, setDosage] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

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

  const handleCreateMedicine = (e) => {
    e.preventDefault();
    updateMedicine(
      index,
      medicineNAme,
      brand,
      manufacturer,
      expiration,
      dateOrdered,
      dateArrived,
      dosage,
      type,
      quantity,
      price,
      description,
      handleClose,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      setMedicineNAme,
      setBrand,
      setManufacturer,
      setExpiration,
      setDateOrdered,
      setDateArrived,
      setDosage,
      setType,
      setQuantity,
      setPrice,
      setDescription
    );
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
            }}>
            Edit
          </Button>
        }
        mdWidth={600}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreateMedicine}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Edit Medicine
            </Typography>
            <Stack spacing={2} direction='row'>
              <TextField
                fullWidth
                size='small'
                type='text'
                label='Medicine Name'
                variant='outlined'
                placeholder={index.medicineNAme}
                onChange={(e) => setMedicineNAme(e.target.value)}
              />
              <TextField
                placeholder={index.brand}
                fullWidth
                size='small'
                type='text'
                label='Brand Name'
                variant='outlined'
                onChange={(e) => setBrand(e.target.value)}
              />
            </Stack>

            <Stack spacing={2} direction='row'>
              <TextField
                placeholder={index.manufacturer}
                fullWidth
                size='small'
                type='text'
                label='Manufacturer'
                variant='outlined'
                onChange={(e) => setManufacturer(e.target.value)}
              />
              <TextField
                placeholder={index.expiration}
                fullWidth
                size='small'
                type='date'
                label='Expiration'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{ p: 0, m: 0 }}></InputAdornment>
                  ),
                }}
                onChange={(e) => setExpiration(e.target.value)}
              />
            </Stack>

            <Stack spacing={2} direction='row'>
              <TextField
                placeholder={index.dateOrdered}
                fullWidth
                size='small'
                type='date'
                label='Date Ordered'
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{ p: 0, m: 0 }}></InputAdornment>
                  ),
                }}
                variant='outlined'
                onChange={(e) => setDateOrdered(e.target.value)}
              />
              <TextField
                placeholder={index.dateArrived}
                fullWidth
                size='small'
                type='date'
                label='Date Arrived'
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{ p: 0, m: 0 }}></InputAdornment>
                  ),
                }}
                variant='outlined'
                onChange={(e) => setDateArrived(e.target.value)}
              />
            </Stack>

            <Stack spacing={2} direction='row'>
              <TextField
                placeholder={index.dosage}
                fullWidth
                size='small'
                type='text'
                label='Dosage'
                variant='outlined'
                onChange={(e) => setDosage(e.target.value)}
              />
              <FormControl fullWidth size='small'>
                <InputLabel id='select-blood-type'>Medicine Type</InputLabel>
                <Select
                  labelId='select-blood-type'
                  id='select-blood-type'
                  value={type}
                  label='Medicine Type'
                  onChange={(e) => setType(e.target.value)}>
                  <MenuItem value='Liquid'>Liquid</MenuItem>
                  <MenuItem value='Capsule'>Capsule</MenuItem>
                  <MenuItem value='Tablet'>Tablet</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack spacing={2} direction='row'>
              <TextField
                placeholder={index.quantity}
                fullWidth
                size='small'
                type='number'
                label='Quantity'
                variant='outlined'
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                placeholder={index.price}
                fullWidth
                size='small'
                type='number'
                label='Price'
                variant='outlined'
                onChange={(e) => setPrice(e.target.value)}
              />
            </Stack>
            <TextField
              placeholder={index.description}
              label='Description'
              type='text'
              multiline
              fullWidth
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />

            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default MedicineEditModal;
