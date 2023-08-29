import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridComponent from "../../../../components/GridComponent";
import ContentGrid from "../../../../components/ContentGrid";
import MedicineReadMoreModal from "../../../layout/pharmacy/medicine/MedicineReadMoreModal";
import MedicineFormModal from "../../../layout/pharmacy/medicine/MedicineFormModal";
import { HealingOutlined } from "@mui/icons-material";
import { getMedicines, searchMedicine } from "../../../../actions/pharmacy/MedicineAction";

const MedicineRecord = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getMedicines(setSearchResult); 
  }, [searchResult]);


  const [searchResult1, setSearchResult1] = useState([]);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    searchMedicine(search, setSearchResult1);

  }
  return (
    <>
    <GridComponent
      onSubmit={handleSearch}
      search={search}
      onChange={(e) => setSearch(e.target.value)}
      title='Medicine Record'
      icon={<HealingOutlined sx={{ fontSize: 30 }} />}>
    {searchResult1.length === 0 ? <>
      {searchResult &&
    searchResult.map((index) => (
    <ContentGrid item xs={12} md={3.5} position='relative'>
      <Stack direction='row' spacing={1} sx={{ position: "absolute", right: 2, bottom: 1 }}>
                <MedicineReadMoreModal index={index} />
              </Stack>
              <Stack spacing={2} direction='row'>
                <Stack spacing={1} alignItems='center'>
                  <Typography color='primary' fontWeight={600}>Stock</Typography>
                  <Typography
                    variant='h4'
                    sx={{
                      p: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #f4f4f4",
                      borderRadius: 2,
                      width: 70,
                      maxWidth: 70,
                    }}>
                    {index.quantity}
                  </Typography>
                </Stack>
                <Divider orientation='vertical' flexItem />
                <Stack>
                  <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography color='primary' fontWeight={600}>Name:</Typography>
                    <Typography textTransform='capitalize' fontWeight={600}>{index.medicineNAme}</Typography>
                  </Stack>
                  <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography color='primary' fontWeight={600}>Brand:</Typography>
                    <Typography textTransform='capitalize' fontWeight={600}>{index.brand}</Typography>
                  </Stack>
                  <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography color='primary' fontWeight={600}>Expire:</Typography>
                    <Typography textTransform='capitalize' fontWeight={600}>{index.expiration}</Typography>
                  </Stack>
                </Stack>
              </Stack>
    </ContentGrid>
   
  ))} 
  
  
   </> : searchResult1.map((index) => (
      <ContentGrid item xs={12} md={3.5} position='relative'>
      <Stack direction='row' spacing={1} sx={{ position: "absolute", right: 2, bottom: 1 }}>
                <MedicineReadMoreModal index={index} />
              </Stack>
              <Stack spacing={2} direction='row'>
                <Stack spacing={1} alignItems='center'>
                  <Typography color='primary'>Stock</Typography>
                  <Typography
                    variant='h4'
                    sx={{
                      p: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #f4f4f4",
                      borderRadius: 2,
                      width: 70,
                      maxWidth: 70,
                    }}>
                    {index.quantity}
                  </Typography>
                </Stack>
                <Divider orientation='vertical' flexItem />
                <Stack>
                  <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography color='primary' fontWeight={600}>Name:</Typography>
                    <Typography textTransform='capitalize' fontWeight={600}>{index.medicineNAme}</Typography>
                  </Stack>
                  <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography color='primary' fontWeight={600}>Brand:</Typography>
                    <Typography textTransform='capitalize' fontWeight={600}>{index.brand}</Typography>
                  </Stack>
                  <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography color='primary' fontWeight={600}>Expire:</Typography>
                    <Typography textTransform='capitalize' fontWeight={600}>{index.expiration}</Typography>
                  </Stack>
                </Stack>
              </Stack>
        </ContentGrid> ))}

    </GridComponent>


<Box
        sx={{
          position: "sticky",
          bottom: 50,
          display: "flex",
          flexDirection: "row-reverse",
        }}>
        <MedicineFormModal />
      </Box>
</>
  );
};

export default MedicineRecord;
