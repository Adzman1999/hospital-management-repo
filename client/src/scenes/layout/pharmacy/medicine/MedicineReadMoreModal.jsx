import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import BackBtn from "../../../../components/BackBtn";
import ModalComponent from "../../../../components/ModalComponent";
import MedicineEditModal from "./MedicineEditModal";

const MedicineReadMoreModal = ({ index }) => {
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
        <ModalComponent open={open} mdWidth={900}>
          <BackBtn handleClose={handleClose1} />
          <Stack spacing={2}>
            <Stack spacing={2} direction='row' sx={{ mt: 8 }}>
              <Stack spacing={2}>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Medicine Name: </Typography>
                  <Typography>{index.medicineNAme}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Brand Name: </Typography>
                  <Typography>{index.brand}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Manufacturer: </Typography>
                  <Typography>{index.manufacturer}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Expiration: </Typography>
                  <Typography>{index.expiration}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Date Ordered: </Typography>
                  <Typography>{index.dateOrdered}</Typography>
                </Stack>
              </Stack>

              <Divider orientation='vertical' flexItem />

              <Stack spacing={2}>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Date Arrived: </Typography>
                  <Typography>{index.dateArrived}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Dosage: </Typography>
                  <Typography>{index.dosage}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Medicine Type: </Typography>
                  <Typography>{index.type}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Stock: </Typography>
                  <Typography>{index.quantity}</Typography>
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Typography color='primary'>Price: </Typography>
                  <Typography>{index.price}</Typography>
                </Stack>
              </Stack>

              <Divider orientation='vertical' flexItem />
              <Stack spacing={1} sx={{ width: 300 }}>
                <Typography color='primary'>Description: </Typography>
                <Typography>{index.description}</Typography>
              </Stack>
            </Stack>

            <Stack direction='row-reverse'>
              <MedicineEditModal handleClose1={handleClose1} index={index} />
            </Stack>
          </Stack>
        </ModalComponent>
      </Box>
    </>
  );
};

export default MedicineReadMoreModal;
