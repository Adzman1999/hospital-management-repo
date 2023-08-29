import { BloodtypeOutlined } from "@mui/icons-material";
import React from "react";
import ContentGrid from "../../../../components/ContentGrid";
import { Stack, Typography } from "@mui/material";
import GridComponent from "../../../../components/GridComponent";

const BloodBankContent = () => {
  return (
    <>
      <GridComponent
        title='Blood Bank'
        icon={<BloodtypeOutlined sx={{ fontSize: 30 }} />}>
        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>

        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>

        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>

        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>

        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>

        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>

        <ContentGrid md={2.1}>
          <Stack spacing={2} direction='row'>
            <Typography variant='h1'>O</Typography>
            <Stack spacing={2}>
              <Typography>Bag Count</Typography>
              <Typography
                variant='h3'
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
                10
              </Typography>
            </Stack>
          </Stack>
        </ContentGrid>
      </GridComponent>
    </>
  );
};

export default BloodBankContent;
