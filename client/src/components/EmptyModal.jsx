import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SmileySad } from "phosphor-react";
import ReadMoreBtn from "./ReadMoreBtn";
import ModalComponent from "./ModalComponent";
import BackBtn from "./BackBtn";
// import PatientTestEditModal from "./PatientTestEditModal";

const EmptyModal = ({message}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ position: "absolute", right: 2, bottom: 1 }}>
        <ReadMoreBtn handleOpen={handleOpen} />
        <ModalComponent open={open} mdWidth={350}>
          <BackBtn handleClose={handleClose1} />
          <Stack spacing={2} mt={6} p={2}>
            <Box sx={{width: '200px', height: '200px', border: '2px dashed rgb(250, 85, 23)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 5}}>
                <SmileySad style={{fontSize: 100, color: 'rgb(250, 85, 23)'}} />
                <Typography color='rgb(250, 85, 23)' textAlign='center' textTransform='uppercase' variant="h6" fontWeight={600}>{message}</Typography>
            </Box>     
          </Stack>
        </ModalComponent>
      </Box>
    </>
  );
};

export default EmptyModal;
