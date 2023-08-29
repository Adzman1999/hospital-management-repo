import React, { useState } from "react";
import { createNewRoom } from "../../../../actions/admin/RoomsAction";
import {
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import { Add } from "@mui/icons-material";
import SubmitBox from "../../../../components/SubmitBox";

const RoomFormModal = () => {
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

  const handleCreateRoom = (e) => {
    e.preventDefault();
    createNewRoom(
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
        title='Add Room'
        icon={
          <Add
            color='primary'
            sx={{
              fontSize: 40,
              border: "4px solid #90CAF9",
              borderRadius: "50%",
            }}
          />
        }
        mdWidth={500}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreateRoom}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Add Room/Bedding
            </Typography>
            <TextField
              fullWidth
              required
              id='roomName'
              size='small'
              type='text'
              label='Room Name'
              variant='outlined'
              onChange={(e) => setRoomName(e.target.value)}
            />
            <FormControl sx={{ minWidth: 130 }} size='small'>
              <InputLabel id='select-room-type'>Room Type</InputLabel>
              <Select
                labelId='select-room-type'
                id='select-room-type'
                value={roomType}
                label='Room Type'
                onChange={(e) => setRoomType(e.target.value)}>
                <MenuItem value='Public'>Public</MenuItem>
                <MenuItem value='Private'>Private</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              required
              id='roomNumber'
              size='small'
              type='number'
              label='Room No.'
              variant='outlined'
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            <TextField
              fullWidth
              required
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

export default RoomFormModal;
