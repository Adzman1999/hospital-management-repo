import React, { useState } from "react";
import {
  Button,
  Card,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { ChartLine, Hourglass, Wheelchair } from "phosphor-react";
import { MenuOpenRounded } from "@mui/icons-material";

const NurseMenu = ({ handleChange }) => {
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
              startIcon={<Wheelchair />}>
              Patients
            </Button>
            <Button
              onClick={() => handleTabs(1)}
              variant='outlined'
              startIcon={<Hourglass />}>
              History
            </Button>
            <Button
              onClick={() => handleTabs(2)}
              variant='outlined'
              startIcon={<ChartLine />}>
              Report Basis
            </Button>
          </Stack>
        </Card>
      </Drawer>
    </>
  );
};

export default NurseMenu;
