import React, { useState } from "react";
import {
  BedroomChildOutlined,
  BiotechOutlined,
  BubbleChartOutlined,
  DashboardOutlined,
  Flip,
  Inventory2Outlined,
  InventoryOutlined,
  LibraryAddOutlined,
  MedicationOutlined,
  MenuOpenRounded,
  PaymentsOutlined,
  WheelchairPickupOutlined,
} from "@mui/icons-material";
import {
  Button,
  Card,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

const AdminMenu = ({ handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTabs = (tab) => {
    if (
      tab === 0 ||
      tab === 1 ||
      tab === 2 ||
      tab === 3 ||
      tab === 4 ||
      tab === 5 ||
      tab === 6 ||
      tab === 7 ||
      tab === 8 ||
      tab === 9 ||
      tab === 10
    ) {
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
            {/* <Button
              onClick={() => handleTabs(0)}
              variant='outlined'
              startIcon={<DashboardOutlined />}>
              Dashboard
            </Button> */}
            <Button
              onClick={() => handleTabs(0)}
              variant='outlined'
              startIcon={<WheelchairPickupOutlined />}>
              Patients
            </Button>
            <Button
              onClick={() => handleTabs(2)}
              variant='outlined'
              startIcon={<LibraryAddOutlined />}>
              Doctor
            </Button>
            <Button
              onClick={() => handleTabs(3)}
              variant='outlined'
              startIcon={<BubbleChartOutlined />}>
              Nurse
            </Button>
            <Button
              onClick={() => handleTabs(4)}
              variant='outlined'
              startIcon={<BiotechOutlined />}>
              Lab Personnel
            </Button>
            <Button
              onClick={() => handleTabs(5)}
              variant='outlined'
              startIcon={<PaymentsOutlined />}>
              Accountant
            </Button>
            <Button
              onClick={() => handleTabs(6)}
              variant='outlined'
              startIcon={<MedicationOutlined />}>
              Pharmacist
            </Button>
            <Button
              onClick={() => handleTabs(7)}
              variant='outlined'
              startIcon={<Flip />}>
              Radiologist
            </Button>
            <Button
              onClick={() => handleTabs(8)}
              variant='outlined'
              startIcon={<BedroomChildOutlined />}>
              Room/Bedding
            </Button>
            <Button
              onClick={() => handleTabs(9)}
              variant='outlined'
              startIcon={<InventoryOutlined />}>
              Common Supply
            </Button>
            <Button
              onClick={() => handleTabs(10)}
              variant='outlined'
              startIcon={<Inventory2Outlined />}>
              Designated Supply
            </Button>
          </Stack>
        </Card>
      </Drawer>
    </>
  );
};

export default AdminMenu;
