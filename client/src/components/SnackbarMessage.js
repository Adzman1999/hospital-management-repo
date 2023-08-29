import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SnackbarMessage = ({ message, open, handleClose, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => handleClose(false)}>
      <Alert
        onClose={() => handleClose(false)}
        severity={severity}
        sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
