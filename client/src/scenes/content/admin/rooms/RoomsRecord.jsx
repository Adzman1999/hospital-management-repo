import React, { Fragment, useEffect, useState } from "react";
import { getRooms } from "../../../../actions/admin/RoomsAction";
import { BedroomChildOutlined } from "@mui/icons-material";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import RoomEditModal from "../../../layout/admin/rooms/RoomEditModal";
import RoomFormModal from "../../../layout/admin/rooms/RoomFormModal";

const RoomsRecord = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getRooms(setSearchResult);
  }, [searchResult]);
  return (
    <>
      <Stack
        spacing={1}
        alignItems='center'
        direction='row'
        sx={{ mt: 4, mb: 2 }}>
        <BedroomChildOutlined sx={{ fontSize: 30 }} />
        <Typography variant='h6'>Rooms/Bedding Record</Typography>
      </Stack>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Room Name
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Room Type
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Room No.
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Room Price
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResult.map((index) => (
            <Fragment key={index._id}>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}>
                <TableCell component='th' scope='row'>
                  {index.roomName}
                </TableCell>

                <TableCell component='th' scope='row'>
                  {index.roomType}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.roomNumber}
                </TableCell>
                <TableCell component='th' scope='row'>
                  PHP{index.roomPrice}
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction='row' alignItems='center'>
                    <RoomEditModal index={index} />
                  </Stack>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          position: "sticky",
          bottom: 2,
          display: "flex",
          flexDirection: "row-reverse",
        }}>
        <RoomFormModal />
      </Box>
    </>
  );
};

export default RoomsRecord;
