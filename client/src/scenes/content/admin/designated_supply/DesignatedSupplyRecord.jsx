import React, { Fragment, useEffect, useState } from "react";
import { Inventory2Outlined } from "@mui/icons-material";
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
import { getDesignatedSupply } from "../../../../actions/admin/DesignatedSupply";
import DesignatedSupplyFormModal from "../../../layout/admin/designated_supply/DesignatedSupplyFormModal";
import DesignatedSupplyEditModal from "../../../layout/admin/designated_supply/DesignatedSupplyEditModal";

const DesignatedSupplyRecord = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getDesignatedSupply(setSearchResult);
  }, [searchResult]);
  return (
    <>
      <Stack
        spacing={1}
        alignItems='center'
        direction='row'
        sx={{ mt: 4, mb: 2 }}>
        <Inventory2Outlined sx={{ fontSize: 30 }} />
        <Typography variant='h6'>Designated Supply Record</Typography>
      </Stack>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Item Name
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Quantity
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Department
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Receiver
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Date Designated
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
                  {index.itemName}
                </TableCell>

                <TableCell component='th' scope='row'>
                  {index.quantity}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.department}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.receiver}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.dateDesignated}
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction='row' alignItems='center'>
                    <DesignatedSupplyEditModal index={index} />
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
        <DesignatedSupplyFormModal />
      </Box>
    </>
  );
};

export default DesignatedSupplyRecord;
