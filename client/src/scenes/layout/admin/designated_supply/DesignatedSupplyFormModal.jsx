import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import { Add } from "@mui/icons-material";
import SubmitBox from "../../../../components/SubmitBox";
import { createNewDesignatedSupply } from "../../../../actions/admin/DesignatedSupply";
import {
  getCommonSupply,
  updateQuantity,
} from "../../../../actions/admin/CommonSupplyAction";
import { getPositions } from "../../../../actions/admin/PositionAction";

const DesignatedSupplyFormModal = () => {
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
  const [department, setDepartment] = useState("");
  const [receiver, setReceiver] = useState("");
  const [dateDesignated, setDateDesignated] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResult1, setSearchResult1] = useState([]);
  const [stock, setStock] = useState(0);
  const [stockId, setStockId] = useState("");

  useEffect(() => {
    getCommonSupply(setSearchResult);
  }, []);

  useEffect(() => {
    getPositions(setSearchResult1);
  }, []);

  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      id: searchResult[i]._id,
      label: searchResult[i].itemName,
      quantity: searchResult[i].quantity,
    });
  }

  let searchData1 = [];
  for (var j = 0; j < searchResult1.length; j++) {
    searchData1.push({
      label:
        searchResult1[j].firstName +
        " " +
        searchResult1[j].middleName +
        " " +
        searchResult1[j].lastName,
      department: searchResult1[j].department,
    });
  }

  const handleData = (data) => {
    try {
      setStockId(data.id);
      setItemName(data.label);
      setStock(data.quantity);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setItemName("");
      setStock(1);
    }
  };

  const handleData1 = (data) => {
    try {
      setReceiver(data.label);
      setDepartment(data.department);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setItemName("");
      setStock(1);
    }
  };

  const handleCreateDesignatedSupply = (e) => {
    e.preventDefault();
    if (stock <= quantity) {
      setErr("You've Entered Maximum Stock Of Supply!");
      handleSnackbarOpenError();
      handleClose();
    } else {
      createNewDesignatedSupply(
        itemName,
        quantity,
        department,
        receiver,
        dateDesignated,
        handleClose,
        setErr,
        setSucceed,
        handleSnackbarOpenSuccess,
        handleSnackbarOpenError,
        setItemName,
        setQuantity,
        setDepartment,
        setReceiver,
        setDateDesignated
      );
      updateQuantity(stockId, quantity, stock);
    }
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
        title='Add Designated Supply'
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
          onSubmit={handleCreateDesignatedSupply}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Add Designated Supply
            </Typography>
            <Autocomplete
              sx={{ p: 0, m: 0 }}
              fullWidth
              size='small'
              autoHighlight
              id='highlights-demo'
              options={searchData}
              onChange={(e, value) => handleData(value)}
              value={itemName}
              renderInput={(params) => (
                <>
                  <TextField
                    sx={{ p: 0, m: 0 }}
                    {...params}
                    placeholder='Search Supply...'
                    margin='normal'
                    required
                  />
                </>
              )}
            />
            <TextField
              fullWidth
              required
              id='qty'
              size='small'
              type='number'
              label='Quantity'
              variant='outlined'
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Autocomplete
              sx={{ p: 0, m: 0 }}
              fullWidth
              size='small'
              autoHighlight
              id='highlights-demo'
              options={searchData1}
              onChange={(e, value) => handleData1(value)}
              value={receiver}
              renderInput={(params) => (
                <>
                  <TextField
                    sx={{ p: 0, m: 0 }}
                    {...params}
                    placeholder='Search Receiver...'
                    margin='normal'
                    required
                  />
                </>
              )}
            />
            <TextField
              fullWidth
              required
              id='department'
              size='small'
              type='text'
              label='Department'
              variant='outlined'
              value={department}
              disabled
              onChange={(e, value) => handleData1(value)}
            />
            {/* <TextField
              fullWidth
              required
              id='receiver'
              size='small'
              type='text'
              label='Receiver'
              variant='outlined'
              onChange={(e) => setReceiver(e.target.value)}
            /> */}
            <TextField
              fullWidth
              required
              id='dateDesignated'
              size='small'
              type='date'
              label='Date Designated'
              variant='outlined'
              onChange={(e) => setDateDesignated(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                ),
              }}
            />
            <SubmitBox handleClose={handleClose} />
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default DesignatedSupplyFormModal;
