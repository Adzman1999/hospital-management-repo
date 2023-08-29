import { AssessmentOutlined } from "@mui/icons-material";
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
import PharmacyReportBasisPrint from "../../../layout/print/pharmacy";
import { getPatients } from "../../../../actions/PatientAction";

const ReportBasisContent = () => {
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
              Date Prescribed
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
                <TableCell>{index.createdAt}</TableCell>
                <TableCell>
                  <PharmacyReportBasisPrint index={index} />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ReportBasisContent;
