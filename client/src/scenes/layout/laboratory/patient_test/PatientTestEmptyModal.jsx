import React, { useState } from "react";
import ModalComponent from "../../../../components/ModalComponent";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import BackBtn from "../../../../components/BackBtn";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  BloodtypeOutlined,
  CandlestickChartOutlined,
  InfoOutlined,
  PlumbingOutlined,
  VaccinesOutlined,
} from "@mui/icons-material";
// import PatientTestEditModal from "./PatientTestEditModal";

const PatientTestEmptyModal = () => {
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
        <ModalComponent open={open} mdWidth={700}>
          <BackBtn handleClose={handleClose1} />
          <Stack spacing={2} mt={8} ml={4} mb={4}>
            <Stack spacing={1} alignItems='center' direction='row'>
              <InfoOutlined sx={{ fontSize: 30 }} />
              <Typography variant='h6'>Patient Test Info</Typography>
            </Stack>
            <Stack direction='row' spacing={2}>
              <Stack spacing={2}>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Swab Test:</Typography>
                  <Typography>None</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Blood Type Transfusion:</Typography>
                  <Typography>None</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'> Bag Count Transfusion:</Typography>
                  <Typography>None</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Typography color='primary'> Donor Name Transfusion:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Pregnant Urine Test:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'> kidney Diseases Urine Test:</Typography>
                    <Typography>None</Typography>
                  </Stack>                
              </Stack>

                <Divider orientation='vertical' flexItem/>
              <Stack spacing={2}>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Diabetes Urine Test:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Liver Disease Urine Test:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'> Blood Type Test:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Blood Pressure:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>White Blood Count:</Typography>
                    <Typography>None</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'> Red Blood Count:</Typography>
                    <Typography>None</Typography>
                  </Stack>
              </Stack>              
            </Stack>
              
          </Stack>
        </ModalComponent>
      </Box>
    </>
  );
};

export default PatientTestEmptyModal;
