import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import {
  Autocomplete,
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, AddPhotoAlternateOutlined } from "@mui/icons-material";
import { getPatients } from "../../../../actions/PatientAction";
import {
  addPatientXrayPrice,
  createNewXrayResult,
} from "../../../../actions/radiology/XrayResultAction";

const XrayResultFormModal = () => {
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

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getPatients(setSearchResult);
  }, []);
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [imageContainer, setImageContainer] = useState(null);

  const handleImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
      setImageContainer(reader.result);
    };
  };

  const handleCreateXrayResult = (e) => {
    e.preventDefault();
    createNewXrayResult(
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      patientId,
      details,
      image
    );
    addPatientXrayPrice(patientId, price);
  };

  const handleData = (data) => {
    try {
      setPatientName(data.label);
      setPatientId(data.id);
    } catch (error) {
      setErr("Field should not be empty!");
      handleSnackbarOpenError();
      handleClose();
      setPatientName("");
      setPatientId("");
    }
  };

  let searchData = [];
  for (var i = 0; i < searchResult.length; i++) {
    searchData.push({
      id: searchResult[i]._id,
      label:
        searchResult[i].firstName +
        " " +
        searchResult[i].middleName +
        " " +
        searchResult[i].lastName,
    });
  }
  return (
    <>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        title='Add X-ray Result'
        icon={
          <Tooltip title='Add Patient Test'>
            <IconButton
              sx={{ zIndex: 100 }}
              onClick={handleOpen}
              size='small'
              variant='outlined'>
              <Add/>
            </IconButton>
          </Tooltip> 
          
        }
        mdWidth={700}>
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
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreateXrayResult}>
          <Stack spacing={2} mb={1} mt={2}>
            <Typography
              color='primary'
              variant='h5'
              sx={{ fontWeight: 600, p: 0, m: 0 }}>
              Add X-ray Result
            </Typography>
            <Stack spacing={2} direction='row'>
              <Stack spacing={2}>
                <Autocomplete
                  sx={{ width: 300, p: 0, m: 0 }}
                  size='small'
                  autoHighlight
                  id='highlights-demo'
                  options={searchData}
                  onChange={(e, value) => handleData(value)}
                  value={patientName}
                  renderInput={(params) => (
                    <>
                      <TextField
                        sx={{ p: 0, m: 0 }}
                        {...params}
                        placeholder='Search Patients...'
                        margin='normal'
                        required
                      />
                    </>
                  )}
                />
                <TextField
                  sx={{ width: 300 }}
                  size='small'
                  type='number'
                  label='Price'
                  variant='outlined'
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  value={details}
                  required
                  label='Remarks'
                  multiline
                  sx={{ width: 300 }}
                  rows={11.5}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Stack>

              <Divider orientation='vertical' flexItem />
              <Stack alignItems='center' spacing={2}>
                <Stack direction='row' alignItems='center' spacing={2}>
                  <TextField
                    // sx={{ width: "130px" }}
                    fullWidth
                    size='small'
                    required
                    type='file'
                    label='Set Image'
                    onChange={handleImage}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                      ),
                    }}
                  />
                  <Button
                    fullWidth
                    onClick={() => {
                      setDetails("");
                      setImage(null);
                      setImageContainer(null);
                    }}
                    variant='outlined'
                    sx={{ textTransform: "capitalize" }}>
                    Add more
                  </Button>
                </Stack>

                {imageContainer === null ? (
                  <Card
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px dashed gray",
                      borderRadius: 2,
                      height: "350px",
                      width: "298px",
                    }}>
                    <Stack spacing={2} direction='row'>
                      <AddPhotoAlternateOutlined />
                      <Typography>NO IMAGE YET</Typography>
                    </Stack>
                  </Card>
                ) : (
                  <img
                    src={imageContainer}
                    alt='pic'
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "contain",
                      borderRadius: "3px",
                    }}
                  />
                )}
              </Stack>
            </Stack>

            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'>
              <Button
                onClick={() => {
                  handleClose();
                  setPatientName("");
                  setDetails("");
                  setPrice(0);
                  setImage(null);
                  setImageContainer(null);
                }}
                variant='contained'
                sx={{
                  textTransform: "capitalize",
                  boxShadow: 0,
                }}>
                Close
              </Button>
              <Button
                type='submit'
                variant='contained'
                sx={{
                  textTransform: "capitalize",
                  boxShadow: 0,
                }}>
                Add to X-ray list
              </Button>
            </Stack>
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default XrayResultFormModal;
