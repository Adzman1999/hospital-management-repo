import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import BackBtn from "../../../../components/BackBtn";
import ModalComponent from "../../../../components/ModalComponent";
// import PrescriptionEditModal from "./PrescriptionEditModal";

const PrescriptionReadMoreModal = ({ index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen(false);
  };

  // let Price = index.prescription.reduce((acc, item) => acc + item.price, 0);

  // let totalPrice = Price;
  return (
    <>
        <ReadMoreBtn handleOpen={handleOpen} />
        <ModalComponent open={open} mdWidth={600}>
          <BackBtn handleClose={handleClose1} />
          <Stack spacing={2}>
            <Stack direction='row' spacing={2} sx={{ mt: 8 }}>
              <Stack spacing={2}>
                <Typography
                  variant='h5'
                  sx={{ fontWeight: 600 }}
                  color='primary'>
                  Payment Info
                </Typography>
                <TableContainer
                  component={Box}
                  sx={{
                    maxHeight: "400px",
                    overflowX: { xs: "shown", md: "hidden" },
                    height: "100%",
                    "::-webkit-scrollbar ": {
                      width: "3px",
                      height: { xs: "3px", md: "0px" },
                    },
                    "::-webkit-scrollbar-thumb": {
                      backgroundColor: "#1565c08f",
                    },
                  }}>
                  <Table
                    stickyHeader
                    aria-label='sticky table'
                    sx={{
                      maxHeight: "400px",
                      overflowX: { xs: "shown", md: "hidden" },
                      height: "100%",
                      "::-webkit-scrollbar ": {
                        width: "3px",
                        height: { xs: "3px", md: "0px" },
                      },
                      "::-webkit-scrollbar-thumb": {
                        backgroundColor: "#1565c08f",
                      },
                    }}>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          color='primary'
                          sx={{ fontWeight: 600, fontSize: "17px" }}>
                          Medicine Name
                        </TableCell>
                        <TableCell
                          color='primary'
                          sx={{ fontWeight: 600, fontSize: "17px" }}>
                          Brand Name
                        </TableCell>
                        <TableCell
                          color='primary'
                          sx={{ fontWeight: 600, fontSize: "17px" }}>
                          Quantity
                        </TableCell>
                        <TableCell
                          color='primary'
                          sx={{ fontWeight: 600, fontSize: "17px" }}>
                          Price
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {index.prescription &&
                        index.prescription.map((med) => (
                          <>
                            <TableRow
                              key={med._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}>
                              <TableCell component='th' scope='row'>
                                {med.medicineNAme}
                              </TableCell>
                              <TableCell>{med.brand}</TableCell>
                              <TableCell>{med.quantity}x</TableCell>
                              <TableCell>PHP{med.price}</TableCell>
                            </TableRow>
                          </>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </Stack>

            <Stack direction='row-reverse'>
              {/* <PrescriptionEditModal index={index} /> */}
            </Stack>
          </Stack>
        </ModalComponent>
    </>
  );
};

export default PrescriptionReadMoreModal;
