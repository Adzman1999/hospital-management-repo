import React, { useState } from "react";
import { Divider, Stack, Typography } from "@mui/material";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import ModalComponent from "../../../../components/ModalComponent";
import BackBtn from "../../../../components/BackBtn";
import { InfoOutlined } from "@mui/icons-material";

const DoctorReadMore = ({ index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ReadMoreBtn handleOpen={handleOpen} />
      <ModalComponent open={open} mdWidth={900}>
        <BackBtn handleClose={handleClose} />
        <Stack spacing={2} sx={{ mt: 8, pl: 5, pb: 5 }}>
          <Stack spacing={1} alignItems='center' direction='row'>
            <InfoOutlined color='primary' sx={{ fontSize: 30 }} />
            <Typography color='primary' variant='h5' sx={{ fontWeight: 600 }}>
              Doctor Info
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2}>
            <img
              src={index.pic}
              alt='pic'
              style={{
                width: "190px",
                height: "190px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <Divider orientation='vertical' flexItem />
            <Stack spacing={2}>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>First Name:</Typography>
                <Typography>{index.firstName}</Typography>
              </Stack>

              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Middle Name:</Typography>
                <Typography>{index.middleName}</Typography>
              </Stack>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Last Name:</Typography>
                <Typography>{index.lastName}</Typography>
              </Stack>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Specialist:</Typography>
                <Typography>{index.specialist}</Typography>
              </Stack>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Consultation Fee:</Typography>
                <Typography>PHP{index.doctorFee}</Typography>
              </Stack>
            </Stack>

            <Divider orientation='vertical' flexItem />
            <Stack spacing={2}>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Contact No.:</Typography>
                <Typography>{index.contact}</Typography>
              </Stack>

              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Email:</Typography>
                <Typography>{index.email}</Typography>
              </Stack>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Address:</Typography>
                <Typography>{index.address}</Typography>
              </Stack>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography color='primary'>Birthdate:</Typography>
                <Typography>{index.birthdate}</Typography>
              </Stack>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Age:</Typography>
                  <Typography>{index.age}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Sex:</Typography>
                  <Typography>{index.sex}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </ModalComponent>
    </>
  );
};

export default DoctorReadMore;
