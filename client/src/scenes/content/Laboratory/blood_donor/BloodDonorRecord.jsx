import React from "react";
import GridComponent from "../../../../components/GridComponent";
import { VaccinesOutlined } from "@mui/icons-material";
import ContentGrid from "../../../../components/ContentGrid";
import BloodDonorReadMoreModal from "../../../layout/laboratory/blood_donor/BloodDonorReadMoreModal";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import BloodDonorFormModal from "../../../layout/laboratory/blood_donor/BloodDonorFormModal";

const BloodDonorRecord = () => {
  return (
    <>
      <GridComponent
        title='Blood Donor Record'
        icon={<VaccinesOutlined sx={{ fontSize: 30 }} />}>
        <ContentGrid position='relative' md={3}>
          <BloodDonorReadMoreModal
          // index={index}
          />

          <Stack direction='row' spacing={1.5}>
            <Avatar sx={{ height: 100, width: 100, objectFit: "cover" }} />
            <Stack spacing={1.5}>
              <Typography variant='body2'>Chester C. Chua</Typography>

              <Typography variant='body2'>19-19-2023, 12:10 AM</Typography>
            </Stack>
          </Stack>
        </ContentGrid>
      </GridComponent>
      <Box
        sx={{
          position: "sticky",
          bottom: 2,
          display: "flex",
          flexDirection: "row-reverse",
        }}>
        <BloodDonorFormModal />
      </Box>
    </>
  );
};

export default BloodDonorRecord;
