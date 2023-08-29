import { PreviewOutlined } from "@mui/icons-material";
import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import BackBtn from "../../../../components/BackBtn";
import ModalComponent from "../../../../components/ModalComponent";

const PharmacyReportBasisPrint = ({ index }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "emp-data",
    onafterprint: () => alert("print success"),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ModalComponent
        title='View And Print'
        open={open}
        mdWidth={800}
        icon={<PreviewOutlined sx={{ color: "#1565C0" }} />}
        handleOpen={handleOpen}>
        <BackBtn handleClose={handleClose} />
        <Stack
          spacing={2}

          // component='form'
          // onSubmit={handlePrint}
        >
          <Stack spacing={2} ref={printRef}>
            <Stack direction='row' spacing={2} sx={{ mt: 8, pl: 7 }}>
              <Stack spacing={2}>
                <Typography variant='h6'>Patient Info</Typography>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Name:</Typography>
                  <Typography>{index.patientName}</Typography>
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

                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Admission:</Typography>
                  <Typography>{index.admission}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Type Of Admission:</Typography>
                  <Typography>{index.typeOfAdmission}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Address:</Typography>
                  <Typography>{index.address}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Contact No.:</Typography>
                  <Typography>{index.contact}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Physician:</Typography>
                  <Typography>{index.attendingPhysician}</Typography>
                </Stack>
              </Stack>
              <Divider orientation='vertical' flexItem />

              <Stack spacing={2}>
                <Typography variant='h6'>Payment Info</Typography>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Date Prescribed:</Typography>
                  <Typography>{index.createdAt}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Medicine:</Typography>
                  <Typography>{index.medicineNAme}</Typography>
                </Stack>

                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Brand Name:</Typography>
                  <Typography>{index.brand}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Quantity:</Typography>
                  <Typography>{index.quantity}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Price:</Typography>
                  <Typography>PHP{index.price}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography color='primary'>Total:</Typography>
                  <Typography>PHP{index.price}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction='row-reverse'>
            <Button
              onClick={handlePrint}
              id='sign-up'
              className='btn-bg'
              variant='contained'
              sx={{
                textTransform: "capitalize",
                boxShadow: 0,
              }}>
              Print
            </Button>
          </Stack>
        </Stack>
      </ModalComponent>
    </>
  );
};

export default PharmacyReportBasisPrint;
