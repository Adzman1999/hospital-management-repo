import React, { useState } from "react";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
} from "@mui/material";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import ModalComponent from "../../../../components/ModalComponent";
// import XrayResultEditModal from "./XrayResultEditModal";
import BackBtn from "../../../../components/BackBtn";

const XrayResultReadMoreModal = ({ index }) => {
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
        <ModalComponent open={open} mdWidth={600}>
          <BackBtn handleClose={handleClose1} />
          <Stack spacing={2} sx={{ mt: 8 }}>
            <Typography variant='h5' sx={{ fontWeight: 600 }} color='primary'>
              X-ray Result Info
            </Typography>

            <Stack spacing={2}>
              <Stack spacing={2} direction='row' alignItems='center'>
                <Typography color='primary'>X-ray Price:</Typography>
                <Typography>{index.xrayPrice}</Typography>
              </Stack>
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
                <Table stickyHeader aria-label='sticky table'>
                  <Stack
                    direction='row'
                    spacing={22}
                    sx={{
                      position: "sticky",
                      top: 0,
                      background: "#fff",
                      mb: 3,
                      pb: 2,
                      borderBottom: "1px solid gray",
                    }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "17px" }}>
                      Image
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "17px" }}>
                      Remarks
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    {index.xray_result &&
                      index.xray_result.map((rad) => (
                        <>
                          <Stack direction='row' spacing={3} key={rad._id}>
                            <img
                              src={rad.image}
                              alt='pic'
                              style={{
                                width: "200px",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "3px",
                              }}
                            />
                            <Typography>{rad.details}</Typography>
                          </Stack>
                        </>
                      ))}
                  </Stack>
                </Table>
              </TableContainer>
            </Stack>
            <Stack direction='row-reverse'>
              {/* <XrayResultEditModal index={index} /> */}
            </Stack>
          </Stack>
        </ModalComponent>
      </Box>
    </>
  );
};

export default XrayResultReadMoreModal;
