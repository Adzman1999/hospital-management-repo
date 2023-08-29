import React, { useRef, useState } from "react";
import ModalComponent from "../../../../components/ModalComponent";
import BackBtn from "../../../../components/BackBtn";
import {
  BloodtypeOutlined,
  CandlestickChartOutlined,
  InfoOutlined,
  PlumbingOutlined,
  PreviewOutlined,
  VaccinesOutlined,
} from "@mui/icons-material";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { useReactToPrint } from "react-to-print";

const LaboratoryReportBasisPrint = ({ index }) => {
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
        mdWidth={900}
        icon={<PreviewOutlined sx={{ color: "#1565C0" }} />}
        handleOpen={handleOpen}>
        <BackBtn handleClose={handleClose} />
        <Stack
          spacing={2}

          // component='form'
          // onSubmit={handlePrint}
        >
          <Stack spacing={2} ref={printRef}>
            <Stack direction='row' spacing={2} sx={{ mt: 8 }}>
              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <InfoOutlined sx={{ fontSize: 30 }} />
                  <Typography variant='h6'>Patient Info</Typography>
                </Stack>
                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Name:</Typography>
                    <Typography>{index.patientName}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Age:</Typography>
                    <Typography>{index.age}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Sex:</Typography>
                    <Typography>{index.sex}</Typography>
                  </Stack>
                </Stack>

                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Admission:</Typography>
                    <Typography>{index.admission}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Type Of Admission:</Typography>
                    <Typography>{index.typeOfAdmission}</Typography>
                  </Stack>
                </Stack>

                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Address:</Typography>
                    <Typography>{index.address}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Contact No.:</Typography>
                    <Typography>{index.contact}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Divider orientation='vertical' flexItem />

              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <VaccinesOutlined sx={{ fontSize: 30 }} />
                  <Typography variant='h6'>Blood Transfusion</Typography>
                </Stack>
                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Blood Type:</Typography>
                    <Typography>{index.bloodTransfusion.bloodType}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Bag Count:</Typography>
                    <Typography>{index.bloodTransfusion.bagCount}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Donor's Name:</Typography>
                    <Typography>{index.bloodTransfusion.donorName}</Typography>
                  </Stack>
                </Stack>

                <Stack spacing={1} alignItems='center' direction='row'>
                  <CandlestickChartOutlined sx={{ fontSize: 30 }} />
                  <Typography variant='h6'>Swab Test</Typography>
                </Stack>
                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Covid-19:</Typography>
                    <Typography>{index.swabTest}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Divider sx={{ mb: 1 }} />

            <Stack direction='row' spacing={2} sx={{ mb: 2 }}>
              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <PlumbingOutlined sx={{ fontSize: 30 }} />
                  <Typography variant='h6'>Urine Test</Typography>
                </Stack>
                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Pregnant:</Typography>
                    <Typography>{index.urineTest.pregnant}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>kidney Diseases:</Typography>
                    <Typography>{index.urineTest.kidneyDiseases}</Typography>
                  </Stack>
                </Stack>

                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Diabetes:</Typography>
                    <Typography>{index.urineTest.diabetes}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Liver Disease:</Typography>
                    <Typography>{index.urineTest.liverDisease}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Divider orientation='vertical' flexItem />

              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <BloodtypeOutlined sx={{ fontSize: 30 }} />
                  <Typography variant='h6'>Blood Test</Typography>
                </Stack>
                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Blood Type:</Typography>
                    <Typography>{index.bloodTest.bloodType}</Typography>
                  </Stack>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>Bag Pressure:</Typography>
                    <Typography>{index.bloodTest.bloodPressure}</Typography>
                  </Stack>
                </Stack>

                <Stack spacing={2} alignItems='center' direction='row'>
                  <Stack spacing={1} alignItems='center' direction='row'>
                    <Typography color='primary'>(Blood Count)</Typography>
                    <Typography color='primary'>White:</Typography>
                    <Typography>{index.bloodTest.bloodCount.white}</Typography>
                    <Typography color='primary'>Blood:</Typography>
                    <Typography>{index.bloodTest.bloodCount.red}</Typography>
                  </Stack>
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

export default LaboratoryReportBasisPrint;
