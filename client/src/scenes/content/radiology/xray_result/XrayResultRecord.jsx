import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import GridComponent from "../../../../components/GridComponent";
import { FlipOutlined } from "@mui/icons-material";
import ContentGrid from "../../../../components/ContentGrid";
import XrayResultReadMoreModal from "../../../layout/radiology/xray_result/XrayResultReadMoreModal";
import { getPatients, searchPatients } from "../../../../actions/PatientAction";
import EmptyModal from "../../../../components/EmptyModal";

const XrayResultRecord = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getPatients(setSearchResult);
  }, [searchResult]);

  const [searchResult1, setSearchResult1] = useState([]);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    searchPatients(search, setSearchResult1);

  }
  return (
    <>
      <GridComponent
        onSubmit={handleSearch}
        search={search}
        onChange={(e) => setSearch(e.target.value)}
        title='X-ray Result Record'
        icon={<FlipOutlined sx={{ fontSize: 30 }} />}>
          {searchResult1.length === 0 ? <>
            {searchResult &&
          searchResult.map((index) => (
            <ContentGrid item xs={12} md={3.5} position='relative'>
              <Stack direction='row' sx={{ position: "absolute", right: 2, bottom: 1 }}>
                {index.prescription.length === 0 ? <EmptyModal message='No X-ray result Made Yet'/> : <XrayResultReadMoreModal index={index} />}
              </Stack>
              <Typography
              color='primary'
                variant='h4'
                sx={{
                  p: "2px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #f4f4f4",
                  borderRadius: 2,
                  width: "100px",
                  maxWidth: "100px",
                }}>
                {index.formerOPD ? "OPD" : "IPD"}
              </Typography>

              <Stack spacing={0.5} >
              <Typography textTransform='uppercase' variant='body2' fontWeight={600}>{String(index.firstName).length > 15
                        ? String(index.firstName).substring(0, 15) + "..."
                        : index.firstName}</Typography>
                    <Typography textTransform='uppercase' variant='body2' fontWeight={600}>{String(index.middleName).length > 15
                        ? String(index.middleName).substring(0, 15) + "..."
                        : index.middleName}</Typography>
                    <Typography textTransform='uppercase' variant='body2' fontWeight={600}>
                      {String(index.lastName).length > 15
                        ? String(index.lastName).substring(0, 15) + "..."
                        : index.lastName}
                    </Typography>

                <Typography color='primary' variant='body2' fontWeight={600}>
                  {index.formerOPD
                    ? String(index.createdAt).substring(0, 10)
                    : index.admission && index.admission.date}
                </Typography>
                <Typography color='primary' variant='body2' fontWeight={600}>
                  {index.formerOPD
                    ? String(index.createdAt).substring(11, 16)
                    : index.admission && index.admission.time}
                </Typography>
              </Stack>
            </ContentGrid>
           
          ))} 
          
          
           </> : searchResult1.map((index) => (
              <ContentGrid item xs={12} md={3.5} position='relative'>
              <Stack direction='row' sx={{ position: "absolute", right: 2, bottom: 1 }}>
              {index.prescription.length === 0 ? <EmptyModal message='No X-ray result Made Yet'/> : <XrayResultReadMoreModal index={index} />}
              </Stack>
              <Typography
              color='primary'
                variant='h4'
                sx={{
                  p: "2px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #f4f4f4",
                  borderRadius: 2,
                  width: "100px",
                  maxWidth: "100px",
                }}>
                {index.formerOPD ? "OPD" : "IPD"}
              </Typography>

              <Stack spacing={0.5} >
              <Typography textTransform='uppercase' variant='body2' fontWeight={600}>{String(index.firstName).length > 15
                        ? String(index.firstName).substring(0, 15) + "..."
                        : index.firstName}</Typography>
                    <Typography textTransform='uppercase' variant='body2' fontWeight={600}>{String(index.middleName).length > 15
                        ? String(index.middleName).substring(0, 15) + "..."
                        : index.middleName}</Typography>
                    <Typography textTransform='uppercase' variant='body2' fontWeight={600}>
                      {String(index.lastName).length > 15
                        ? String(index.lastName).substring(0, 15) + "..."
                        : index.lastName}
                    </Typography>

                <Typography color='primary' variant='body2' fontWeight={600}>
                  {index.formerOPD
                    ? String(index.createdAt).substring(0, 10)
                    : index.admission && index.admission.date}
                </Typography>
                <Typography color='primary' variant='body2' fontWeight={600}>
                  {index.formerOPD
                    ? String(index.createdAt).substring(11, 16)
                    : index.admission && index.admission.time}
                </Typography>
              </Stack>
            </ContentGrid> ))}
        
      </GridComponent>
    </>
  );
};

export default XrayResultRecord;
