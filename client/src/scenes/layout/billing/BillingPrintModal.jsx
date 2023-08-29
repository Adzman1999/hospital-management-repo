import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import ModalComponent from "../../../components/ModalComponent";
import BackBtn from "../../../components/BackBtn";
import { EastRounded } from "@mui/icons-material";
import { Button, Typography, Stack } from "@mui/material";

const BillingPrintModal = ({
  datePaid,
  patientName,
  xray,
  allDoctorFee,
  totalPrice,
  swabTestPrice,
  urineTestPrice,
  bloodTestPrice,
  sex,
  age,
  address,
  contact,
  hosPlan,
  admission,
  discharge,
  roomNumber,
  patientType,
  room,
  charge,
  discount,
}) => {
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
        title="View And Print"
        open={open}
        mdWidth={800}
        buttonName={
          <Button
            onClick={handleOpen}
            size="small"
            variant="outlined"
            startIcon={<EastRounded />}
          >
            Here
          </Button>
        }
      >
        <BackBtn handleClose={handleClose} />
        <Stack spacing={2}>
          <Stack spacing={2} ref={printRef} mt={8}>
            <Stack direction="row" spacing={10}>
              <Stack spacing={2} ml={4}>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Patient's Name:
                  </Typography>
                  <Typography>{patientName}</Typography>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: 600 }}>Age:</Typography>
                    <Typography sx={{ fontWeight: 600 }}>{age}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: 600 }}>Sex:</Typography>
                    <Typography>{sex}</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Contact No.:</Typography>
                  <Typography>{contact}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Hospitalization Plan:
                  </Typography>
                  <Typography>{hosPlan}</Typography>
                </Stack>
              </Stack>

              {/* //////// */}

              <Stack spacing={2}>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Patient's Address:
                  </Typography>
                  <Typography>{address}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Admission Date:
                  </Typography>
                  <Typography>
                    {(admission && admission.date) || "N/A"}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Discharge Date:
                  </Typography>
                  <Typography>
                    {(discharge && discharge.date) || "N/A"}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Room Number:</Typography>
                  <Typography>{roomNumber || "N/A"}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Patient Type:
                  </Typography>
                  <Typography>{patientType ? "OPD" : "IPD"}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack pl={4} pt={4}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Hospital Bill Particular
              </Typography>
            </Stack>

            <Stack direction="row" spacing={10}>
              <Stack spacing={2} ml={4}>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>X-ray:</Typography>
                  <Typography>PHP{xray}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Medicine:</Typography>
                  <Typography>PHP{totalPrice}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Urine Test:</Typography>
                  <Typography>PHP{urineTestPrice}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Blood Test:</Typography>
                  <Typography>PHP{bloodTestPrice}</Typography>
                </Stack>
              </Stack>

              {/* //////// */}

              <Stack spacing={2}>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Consultation Fee:
                  </Typography>
                  <Typography>PHP{allDoctorFee}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Room Price:</Typography>
                  <Typography>PHP{room}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Swab Test:</Typography>
                  <Typography>PHP{swabTestPrice}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Hospitalization Plan:
                  </Typography>
                  <Typography>{discount}</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Stack
                justifyContent="center"
                direction="row"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontWeight: 600 }}>Date Paid:</Typography>
                  <Typography>{datePaid}............</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Typography sx={{ fontWeight: 600 }}>Total Due:</Typography>
                  <Typography>PHP{charge}.............</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row-reverse">
            <Button
              onClick={handlePrint}
              id="sign-up"
              className="btn-bg"
              variant="contained"
              sx={{
                textTransform: "capitalize",
                boxShadow: 0,
              }}
            >
              Print
            </Button>
          </Stack>
        </Stack>
      </ModalComponent>
    </>
  );
};

export default BillingPrintModal;
