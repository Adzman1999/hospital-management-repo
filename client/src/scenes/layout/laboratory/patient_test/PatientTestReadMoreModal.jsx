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

const PatientTestReadMoreModal = ({ lab }) => {
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
        <ModalComponent open={open} mdWidth={950}>
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
                  <Typography>{lab.swabTestResult || "N/A"}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Blood Type Transfusion:</Typography>
                  <Typography>{lab.TransfusionBloodType || "N/A"}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'> Bag Count Transfusion:</Typography>
                  <Typography>{lab.TransfusionBagCount || "N/A"}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Typography color='primary'> Donor Name Transfusion:</Typography>
                    <Typography>{lab.TransfusionDonorName || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Pregnant Urine Test:</Typography>
                    <Typography>{lab.pregnantUrineTest || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'> kidney Diseases Urine Test:</Typography>
                    <Typography>{lab.kidneyDiseasesUrineTest || "N/A"}</Typography>
                  </Stack>                
              </Stack>

                <Divider orientation='vertical' flexItem/>
              <Stack spacing={2}>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Diabetes Urine Test:</Typography>
                    <Typography>{lab.diabetesUrineTest || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Liver Disease Urine Test:</Typography>
                    <Typography>{lab.liverDiseaseUrineTest || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'> Blood Type Test:</Typography>
                    <Typography>{lab.bloodTypeTest || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Blood Pressure:</Typography>
                    <Typography>{lab.bloodPressureTest || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>White Blood Count:</Typography>
                    <Typography>{lab.whiteBloodCountTest || "N/A"}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'> Red Blood Count:</Typography>
                    <Typography>{lab.redBloodCountTest || "N/A"}</Typography>
                  </Stack>
              </Stack> 

              <Divider orientation='vertical' flexItem/>

              <Stack spacing={2} sx={{maxWidth: 200}}>
                <Stack spacing={1}>
                    <Typography color='primary'>Remark:</Typography>
                    <Typography>{String(lab.remark).length >= 250 ? String(lab.remark).substring(0, 250) : lab.remark || "N/A"}</Typography>
                </Stack>
              </Stack>            
            </Stack>
              
          </Stack>
        </ModalComponent>
      </Box>
    </>
  );
};

export default PatientTestReadMoreModal;
