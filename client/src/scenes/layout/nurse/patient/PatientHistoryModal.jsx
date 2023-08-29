import React, { useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Modal,
  Fade,
  Card,
} from "@mui/material";
import BackBtn from "../../../../components/BackBtn";
import { File } from "phosphor-react";
import { addAttachmentFile } from "../../../../actions/PatientAction";

const PatientHistoryModal = ({ handleMenuClose, index }) => {
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

  const [fileName, setFileName] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState({ url: "" });

  const handleCancel = () => {
    handleClose();
    setFileName("");
    setDate("");
    setFile({ url: "" });
  };

  const handleAddMore = () => {
    setFileName("");
    setDate("");
    setFile({ url: "" });
  }

  const covertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImage = async (e) => {
    try {
      const pdf = e.target.files[0];
      const b64 = await covertToBase64(pdf);
      setFile({ ...file, url: b64 });
    } catch (error) {
      setErr("Field should not be empty");
      handleSnackbarOpenError();
    }
  };

  const handleSubmitPatient = (e) => {
    e.preventDefault();
    addAttachmentFile(
      file.url,
      fileName,
      date,
      index,
      setSucceed,
      handleSnackbarOpenSuccess
    );
  };

  return (
    <>
      <Button
        sx={{ textTransform: "capitalize" }}
        variant="outlined"
        size="small"
        onClick={() => {
          handleOpen();
          handleMenuClose();
        }}
      >
        Add Attachment
      </Button>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(13px)",
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card
            elevation={3}
            sx={{
              width: { xs: "100%", md: "auto" },
              boxShadow: 0,
              background: "transparent",
              zIndex: 2000,
            }}
          >
            <Card
              className="sub-bg"
              sx={{
                boxShadow: 0,
                pr: 2,
                pl: 2,
                pt: 0,
                pb: 2,
                m: 2,
              }}
            >
              <SnackbarMessage
                message={err}
                open={snackbarError}
                handleClose={setSnackBarError}
                severity="error"
              />
              <SnackbarMessage
                message={succeed}
                open={snackbarSuccess}
                handleClose={setSnackBarSuccess}
                severity="success"
              />
              <BackBtn handleClose={handleCancel} />
              <Stack
                // direction="row" spacing={2}
                mt={6}
              >
                <Stack
                  spacing={2}
                  p={2}
                  component="form"
                  onSubmit={handleSubmitPatient}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Add Attachment
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize" }}
                      onClick={handleAddMore}
                    >
                      Add More
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      accept=".jpeg, .png, .jpg, .pdf"
                      type="file"
                      label="Set Attachment"
                      variant="outlined"
                      onChange={(e) => handleImage(e)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ p: 0, m: 0 }}
                          />
                        ),
                      }}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      type="date"
                      label="Set Date"
                      variant="outlined"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ p: 0, m: 0 }}
                          />
                        ),
                      }}
                    />
                  </Stack>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    type="text"
                    label="Enter Description"
                    value={fileName}
                    variant="outlined"
                    onChange={(e) => setFileName(e.target.value)}
                  />

                  {file.url ? (
                    <object
                      data={file.url}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "300px",
                      }}
                    />
                  ) : (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          border: "2px dashed gray",
                          p: 1,
                          width: "100%",
                          height: "20vh",
                        }}
                      >
                        <File style={{ fontSize: 20 }} />
                        <Typography
                          textTransform="uppercase"
                          variant="body1"
                          fontWeight={500}
                        >
                          Preview
                        </Typography>
                      </Stack>
                    </Stack>
                  )}
                  <Stack direction="row-reverse">
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                      type="submit"
                    >
                      Add to Attachment List
                    </Button>
                  </Stack>
                </Stack>

                {/* <Divider orientation="vertical" flexItem /> */}
                {/* ////////////////////// */}

                {/* <Stack spacing={2} p={2}>
                  <Stack direction="row" alignItems="center" spacing={2}> */}
                {/* <Button  variant='outlined' sx={{width: '37px', maxWidth: '37px', minWidth: '37px', }}><Sort/> </Button>
                 */}
                {/* <TextField
                      size="small"
                      placeholder="Search here..."
                      type="text"
                      
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button size="large">
                              <MagnifyingGlass fontSize={"15px"} />
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                {/* </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "2px dashed gray",
                        p: 1,
                        width: "100%",
                        height: "30vh",
                      }}
                    >
                      <File style={{ fontSize: 20 }} />
                      <Typography
                        textTransform="uppercase"
                        variant="body1"
                        fontWeight={500}
                      >
                        Preview
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack> */}
              </Stack>
            </Card>
          </Card>
        </Fade>
      </Modal>
    </>
  );
};

export default PatientHistoryModal;
