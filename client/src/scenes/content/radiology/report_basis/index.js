import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AssessmentOutlined } from "@mui/icons-material";
import XrayResultPrint from "../../../layout/print/radiology";
import { getPatients } from "../../../../actions/PatientAction";

const XrayResultReportBasis = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getPatients(setSearchResult);
  }, []);
  return (
    <>
      <Stack
        spacing={1}
        alignItems='center'
        direction='row'
        sx={{ mt: 4, mb: 2 }}>
        <AssessmentOutlined sx={{ fontSize: 30 }} />
        <Typography variant='h6'>Report Basis</Typography>
      </Stack>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Patient
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Attending Physician
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Date Result
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Report
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResult.map((index) => (
            <>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}>
                <TableCell component='th' scope='row'>
                  {index.patientName}
                </TableCell>
                <TableCell>{index.attendingPhysician}</TableCell>
                <TableCell>
                  {String(index.createdAt).substring(0, 10)}
                </TableCell>
                <TableCell>
                  <XrayResultPrint index={index} />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default XrayResultReportBasis;
