import React, { useState } from "react";
import { Card, Stack, TextField, Typography } from "@mui/material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import { Update } from "@mui/icons-material";
import SubmitBox from "../../../../components/SubmitBox";
import { updateRoom } from "../../../../actions/admin/RoomsAction";

const RoomEditModal = ({ index }) => {
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

  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);

  const handleUpdateRoom = (e) => {
    e.preventDefault();
    updateRoom(
      index,
      roomName,
      roomType,
      roomNumber,
      roomPrice,
      handleClose,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      setRoomName,
      setRoomType,
      setRoomNumber,
      setRoomPrice
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
        title='Edit Room'
        icon={<Update color='primary' />}
        mdWidth={500}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleUpdateRoom}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Edit Room/Bedding
            </Typography>
            <TextField
              fullWidth
              id='roomName'
              size='small'
              type='text'
              label='Room Name'
              variant='outlined'
              onChange={(e) => setRoomName(e.target.value)}
            />
            <TextField
              fullWidth
              id='roomType'
              size='small'
              type='text'
              label='Room Type'
              variant='outlined'
              onChange={(e) => setRoomType(e.target.value)}
            />
            <TextField
              fullWidth
              id='roomNumber'
              size='small'
              type='number'
              label='Room No.'
              variant='outlined'
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            <TextField
              fullWidth
              id='roomPrice'
              size='small'
              type='number'
              label='Room Price'
              variant='outlined'
              onChange={(e) => setRoomPrice(e.target.value)}
            />
            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default RoomEditModal;
