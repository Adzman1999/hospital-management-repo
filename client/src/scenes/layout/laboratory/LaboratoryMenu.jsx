import { MenuOpenRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { DropHalf, Wheelchair } from "phosphor-react";

import React, { useState } from "react";

const LaboratoryMenu = ({ handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTabs = (tab) => {
    if (tab === 0 || tab === 1 || tab === 2 || tab === 3) {
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
              Patient Test
            </Button>
            <Button
              onClick={() => handleTabs(1)}
              variant='outlined'
              startIcon={<DropHalf />}>
              Report Basis
            </Button>
          </Stack>
        </Card>
      </Drawer>
    </>
  );
};

export default LaboratoryMenu;
