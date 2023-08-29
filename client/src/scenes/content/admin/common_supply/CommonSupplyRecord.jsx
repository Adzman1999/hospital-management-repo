import React, { Fragment, useEffect, useState } from "react";
import { InventoryOutlined } from "@mui/icons-material";
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
import CommonSupplyFormModal from "../../../layout/admin/common_supply/CommonSupplyFormModal";
import CommonSupplyEditModal from "../../../layout/admin/common_supply/CommonSupplyEditModal";
import { getCommonSupply } from "../../../../actions/admin/CommonSupplyAction";

const CommonSupplyRecord = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getCommonSupply(setSearchResult);
  }, [searchResult]);
  return (
    <>
      <Stack
        spacing={1}
        alignItems='center'
        direction='row'
        sx={{ mt: 4, mb: 2 }}>
        <InventoryOutlined sx={{ fontSize: 30 }} />
        <Typography variant='h6'>Common Supply Record</Typography>
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
              Stock
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Date Ordered
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Date Delivered
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Item Price
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
                  {index.dateOrdered}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.dateDelivered}
                </TableCell>
                <TableCell component='th' scope='row'>
                  PHP{index.itemPrice}
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction='row' alignItems='center'>
                    <CommonSupplyEditModal index={index} />
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
        <CommonSupplyFormModal />
      </Box>
    </>
  );
};

export default CommonSupplyRecord;
