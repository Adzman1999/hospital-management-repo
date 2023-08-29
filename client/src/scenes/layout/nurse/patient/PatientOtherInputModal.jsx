import { MoreVertRounded } from "@mui/icons-material";
import {
  Card,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PatientDoctorFeeModal from "./PatientDoctorFeeModal";
import PatientHistoryModal from "./PatientHistoryModal";
import PatientPrescriptionModal from "./PatientPrescriptionModal";
import PatientRemarkModal from "./PatientRemarkModal";

const PatientOtherInputModal = ({index}) => {
  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title='Options'>
        <IconButton
          sx={{
            zIndex: 100,
            ":hover": {
              background: "transparent",
            },
          }}
          onClick={handleProfileMenuOpen}
          size='small'
          variant='outlined'>
          <MoreVertRounded
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}>
        <Card sx={{ p: 2 }} elevation={0}>
          <Stack spacing={2}>
            <PatientRemarkModal handleMenuClose={handleMenuClose} index={index}/>
            <PatientPrescriptionModal handleMenuClose={handleMenuClose} index={index} />
            <PatientDoctorFeeModal handleMenuClose={handleMenuClose} index={index} />
            <PatientHistoryModal handleMenuClose={handleMenuClose} index={index} />
          </Stack>
        </Card>
      </Menu>
    </>
  );
};

export default PatientOtherInputModal;
