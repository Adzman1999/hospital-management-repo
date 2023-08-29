import {
  Button,
  Card,
  Fade,
  IconButton,
  Modal,
  Stack,
  Tooltip,
} from "@mui/material";
import React from "react";

const ModalComponent = ({
  children,
  open,
  icon,
  mdWidth,
  buttonName,
}) => {
  return (
    <>
      {buttonName}
          {icon}
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(13px)",
        }}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Card
            elevation={3}
            // component='form'
            // onSubmit={registerSubmit}
            sx={{
              width: { xs: "100%", md: 'auto' },
              boxShadow: 0,
              background: "transparent",
              zIndex: 2000,
            }}>
            <Card
              className='sub-bg'
              sx={{
                boxShadow: 0,
                pr: 2,
                pl: 2,
                pt: 0,
                pb: 2,
                m: 2,
              }}>
              {children}
            </Card>
          </Card>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalComponent;
