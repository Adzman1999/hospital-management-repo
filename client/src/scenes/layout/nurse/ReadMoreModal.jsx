import { InfoOutlined } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ReadMoreBtn from "../../../components/ReadMoreBtn";
import ModalComponent from "../../../components/ModalComponent";
import BackBtn from "../../../components/BackBtn";

function ReadMoreModal({ index }) {
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

          <Stack spacing={2}>
            <Stack spacing={2} mt={5} pl={7} pb={5}>
              <Stack spacing={1} alignItems='center' direction='row'>
                <InfoOutlined sx={{ fontSize: 30 }} />
                <Typography variant='h6'>Patient Info</Typography>
              </Stack>
              <Stack direction='row' spacing={2}>
              <Stack spacing={2}>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Patient's Name:</Typography>
                  <Typography>{index.firstName}</Typography>
                  <Typography>{index.middleName}</Typography>
                  <Typography>{index.lastName}</Typography>
                </Stack>
                {index.formerOPD ? (
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>
                      Attending Physician:
                    </Typography>
                    <Typography>{index.attendingPhysician}</Typography>
                  </Stack>
                ) : (
                  <Stack direction='row' spacing={1}>
                    <Typography color='primary'>Room No.:</Typography>
                    <Typography>{index.roomNumber}</Typography>
                  </Stack>
                )}
                {index.formerOPD ? (
                  <>
                    <Stack direction='row' spacing={1}>
                      <Typography color='primary'>healthInsurance:</Typography>
                      <Typography>{index.healthInsurance || "N/A"}</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                      <Typography color='primary'>
                        Hospitalization Plan:
                      </Typography>
                      <Typography>{index.hosPlan || "N/A"}</Typography>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack direction='row' spacing={1}>
                      <Typography color='primary'>Room Type:</Typography>
                      <Typography>{index.roomType}</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                      <Typography color='primary'>Room Name:</Typography>
                      <Typography>{index.roomName}</Typography>
                    </Stack>
                  </>
                )}
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Permanent Address:</Typography>
                  <Typography>{index.permanentAddress}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Contact No.:</Typography>
                  <Typography>{index.contact}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Age:</Typography>
                  <Typography>{index.age}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Civil Status:</Typography>
                  <Typography>{index.civilStatus}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Birthdate:</Typography>
                  <Typography>{index.birthdate}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Birthplace:</Typography>
                  <Typography>{index.birthplace}</Typography>
                </Stack>
              </Stack>

                
                

              <Divider orientation='vertical' flexItem />
              <Stack spacing={2}>

                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Sex:</Typography>
                  <Typography>{index.sex}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Nationality:</Typography>
                  <Typography>{index.nationality}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Occupation:</Typography>
                  <Typography>{index.occupation}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Religion:</Typography>
                  <Typography>{index.religion}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Father's Name:</Typography>
                  <Typography>{index.fatherName}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Address:</Typography>
                  <Typography>{index.fatherAddress}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Contact No.:</Typography>
                  <Typography>{index.fatherContact}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Mother's Name:</Typography>
                  <Typography>{index.motherName}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Address:</Typography>
                  <Typography>{index.motherAddress}</Typography>
                </Stack>
                <Stack direction='row' spacing={1}>
                  <Typography color='primary'>Contact No.:</Typography>
                  <Typography>{index.motherContact}</Typography>
                </Stack>

              </Stack>

              </Stack>
              
              
            </Stack>
          </Stack>
        </ModalComponent>
    </>
  );
}

export default ReadMoreModal;
