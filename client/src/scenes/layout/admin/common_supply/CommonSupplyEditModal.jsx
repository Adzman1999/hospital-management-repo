import React, { useState } from "react";
import {
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import SubmitBox from "../../../../components/SubmitBox";
import { updateCommonSupply } from "../../../../actions/admin/CommonSupplyAction";
import { Update } from "@mui/icons-material";

const CommonSupplyEditModal = ({ index }) => {
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

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [dateOrdered, setDateOrdered] = useState("");
  const [dateDelivered, setDelivered] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const handleUpdateCommonSupply = (e) => {
    e.preventDefault();
    updateCommonSupply(
      index,
      itemName,
      quantity,
      dateOrdered,
      dateDelivered,
      itemPrice,
      handleClose,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      setItemName,
      setQuantity,
      setDateOrdered,
      setDelivered,
      setItemPrice
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
        handleOpen={handleOpen}
        title='Edit Common Supply'
        icon={<Update color='primary' />}
        mdWidth={500}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleUpdateCommonSupply}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Edit Common Supply
            </Typography>
            <TextField
              fullWidth
              id='itemName'
              size='small'
              type='text'
              label='Item Name'
              variant='outlined'
              onChange={(e) => setItemName(e.target.value)}
            />
            <TextField
              fullWidth
              id='qty'
              size='small'
              type='number'
              label='Quantity'
              variant='outlined'
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              fullWidth
              id='dateOrdered'
              size='small'
              type='date'
              label='Date Ordered'
              variant='outlined'
              onChange={(e) => setDateOrdered(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                ),
              }}
            />
            <TextField
              fullWidth
              id='dateDelivered'
              size='small'
              type='date'
              label='Date Delivered'
              variant='outlined'
              onChange={(e) => setDelivered(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                ),
              }}
            />
            <TextField
              fullWidth
              id='itemPrice'
              size='small'
              type='number'
              label='Item Price'
              variant='outlined'
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default CommonSupplyEditModal;
