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
import { Update } from "@mui/icons-material";
import SubmitBox from "../../../../components/SubmitBox";
import { updateDesignatedSupply } from "../../../../actions/admin/DesignatedSupply";
import {
  getCommonSupply,
  updateQuantity,
} from "../../../../actions/admin/CommonSupplyAction";
import { getPositions } from "../../../../actions/admin/PositionAction";

const DesignatedSupplyEditModal = ({ index }) => {
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

  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      id: searchResult[i]._id,
      label: searchResult[i].itemName,
      quantity: searchResult[i].quantity,
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

  const handleUpdateDesignatedSupply = (e) => {
    e.preventDefault();
    if (stock <= quantity) {
      setErr("You've Entered Maximum Stock Of Supply!");
      handleSnackbarOpenError();
      handleClose();
    } else {
      updateDesignatedSupply(
        index,
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
        title='Edit Designated Supply'
        icon={<Update color='primary' />}
        mdWidth={500}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleUpdateDesignatedSupply}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Edit Designated Supply
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
                    {...params}
                    placeholder='Search Supply...'
                    margin='normal'
                    sx={{ p: 0, m: 0 }}
                  />
                </>
              )}
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
              id='department'
              size='small'
              type='text'
              label='Department'
              variant='outlined'
              value={department}
              // onChange={(e) => setDepartment(e.target.value)}
              onChange={(e, value) => handleData1(value)}
            />
            {/* <TextField
              fullWidth
              id='receiver'
              size='small'
              type='text'
              label='Receiver'
              variant='outlined'
              onChange={(e) => setReceiver(e.target.value)}
            /> */}
            <TextField
              fullWidth
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

export default DesignatedSupplyEditModal;
