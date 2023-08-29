import React, { useState } from "react";
import {
  Button,
  Card,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { ChartLine, FirstAid, FirstAidKit } from "phosphor-react";
import { MenuOpenRounded } from "@mui/icons-material";

const PharmacyMenu = ({ handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTabs = (tab) => {
    if (tab === 0 || tab === 1 || tab === 2) {
      handleChange(tab);
      handleClose();
    }
  };
  return (
    <>
      <Tooltip title='Open Menu'>
        <IconButton className='sub-text-color' onClick={handleOpen}>
          <MenuOpenRounded />
        </IconButton>
      </Tooltip>

      <Drawer
        anchor='right'
        open={open}
        onClose={handleClose}
        variant='temporary'
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            background: "transparent",
            boxShadow: 0,
          },
        }}>
        <Card
          className='sub-bg'
          sx={{
            width: 257,
            p: 3,
            overflowX: "hidden",
            overflowY: "scroll",
            "::-webkit-scrollbar ": {
              width: "0px",
            },
            m: 1,
          }}>
          <Stack spacing={2}>
            <Button
              onClick={() => handleTabs(0)}
              variant='outlined'
              startIcon={<FirstAid />}>
              Medicines
            </Button>
            <Button
              onClick={() => handleTabs(1)}
              variant='outlined'
              startIcon={<FirstAidKit />}>
              Prescriptions
            </Button>
            {/* <Button
              onClick={() => handleTabs(2)}
              variant='outlined'
              startIcon={<ChartLine />}>
              Report Basis
            </Button> */}
          </Stack>
        </Card>
      </Drawer>
    </>
  );
};

export default PharmacyMenu;
