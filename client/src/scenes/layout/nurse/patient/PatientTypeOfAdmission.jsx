import { Add } from "@mui/icons-material";
import {
  Card,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PatientsFormModal from "./PatientsFormModal";
import PatientAsOPDFormModal from "./PatientAsOPDFormModal";

const PatientTypeOfAdmission = () => {
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
      <Tooltip title='Add Patient'>
        <IconButton
          onClick={handleProfileMenuOpen}
          className='btn-no-bg'
          size='small'
          variant='outlined'>
          <Add
          />
        </IconButton>
      </Tooltip>
      {/* <Button
          variant='contained'
          sx={{
            zIndex: 100,
            // ":hover": {
            //   background: "transparent",
            // },
            width: '39px', height: '39px', minWidth: '39px', minHeight: '39px', maxWidth: '39px', maxHeight: '39px'
          }}
          onClick={handleProfileMenuOpen}
          size='small'>
          <Add
            color='primary'
            sx={{
              fontSize: 30,
              color: "#fff"
            }}
          />
        </Button> */}
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
          <Typography mb={2}>What type of Patient?</Typography>
          <Stack spacing={2} direction='row' alignItems='center'>
            <PatientsFormModal handleMenuClose={handleMenuClose} />
            <PatientAsOPDFormModal handleMenuClose={handleMenuClose} />
          </Stack>
        </Card>
      </Menu>
    </>
  );
};

export default PatientTypeOfAdmission;
