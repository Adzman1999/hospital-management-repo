import React, { useState } from "react";
import {
  Stack,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ReadMoreBtn from "../../../components/ReadMoreBtn";
import ModalComponent from "../../../components/ModalComponent";
import BackBtn from "../../../components/BackBtn";

const BillingPaidDetails = ({ index }) => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ position: "absolute", right: 2, bottom: 1 }}>
        <ReadMoreBtn handleOpen={handleOpen} />
        <ModalComponent open={open} mdWidth={350}>
          <BackBtn handleClose={handleClose} />

          <Stack spacing={2} mt={6} p={2}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Payment Info
            </Typography>

            <TableContainer
              component={Box}
              sx={{
                maxHeight: "260px",
                overflowX: { xs: "shown", md: "hidden" },
                height: "100%",
                "::-webkit-scrollbar ": {
                  width: "3px",
                  height: { xs: "3px", md: "0px" },
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#1565c08f",
                },
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      color="primary"
                      sx={{ fontWeight: 600, fontSize: "15px" }}
                    >
                      Date Paid
                    </TableCell>
                    <TableCell
                      color="primary"
                      sx={{ fontWeight: 600, fontSize: "15px" }}
                    >
                      Total Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {index.billing &&
                    index.billing.map((bill) => (
                      <>
                        <TableRow
                          key={bill._id}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {bill.datePaid}
                          </TableCell>
                          <TableCell>PHP{bill.totalBills}</TableCell>
                        </TableRow>
                      </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </ModalComponent>
      </Box>
    </>
  );
};

export default BillingPaidDetails;
