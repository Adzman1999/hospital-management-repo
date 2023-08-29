import React, { useState } from "react";
import { EastRounded, InfoOutlined, PersonOutlined, SettingsOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import LaboratoryMenu from "../scenes/layout/laboratory/LaboratoryMenu";
import PharmacyMenu from "../scenes/layout/pharmacy/PharmacyMenu";
import RadiologyMenu from "../scenes/layout/radiology/RadiologyMenu";
import AdminMenu from "../scenes/layout/admin/AdminMenu";
import { HospitalState } from "../context/HospitalProvider";
import NurseMenu from "../scenes/layout/nurse/NurseMenu";
import BillingFormModal from "../scenes/layout/billing/BillingFormModal";
import Logo from "../assets/logo.png"
import PatientTypeOfAdmission from "../scenes/layout/nurse/patient/PatientTypeOfAdmission";
import PatientTestFormModal from "../scenes/layout/laboratory/patient_test/PatientTestFormModal";
import XrayResultFormModal from "../scenes/layout/radiology/xray_result/XrayResultFormModal";

const Header = ({ setValue }) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const { user } = HospitalState();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    handleMenuClose();
  };

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
      <AppBar position='sticky' className='sub-bg' sx={{ background: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <img src={Logo} style={{width: '100px', objectFit: 'cover'}} alt='logo'/>

            
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <>
              {(user && user.username === "admin" && (
                <AdminMenu handleChange={handleChange} />
              )) ||
                (user && user.username === "pharmacist" && (
                  <PharmacyMenu handleChange={handleChange} />
                )) ||
                (user && user.username === "labpersonnel" && (
                  <PatientTestFormModal />
                )) ||
                (user && user.username === "radiologist" && (
                  <XrayResultFormModal />
                )) ||
                (user && user.username === "nurse" && (
                  <PatientTypeOfAdmission />
                )) ||
                (user && user.username === "accountant" && (
                  <BillingFormModal />
                ))}
            </>
            {/* <Tooltip title='Open Profile'>
              <IconButton
                onClick={handleProfileMenuOpen}
                className='btn-no-bg'
                size='large'
                aria-label='show 4 new mails'>
                <PersonOutlined fontSize='small' />
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
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <a
                href='/'
                onClick={handleLogout}
                style={{ textDecoration: "none" }}>
                <MenuItem>Logout</MenuItem>
              </a>
            </Menu> */}

            <Tooltip title='Open Setting'>
              <IconButton
                className='btn-no-bg'
                size='large'
                edge='end'
                aria-haspopup='true'>
                <InfoOutlined fontSize='small' />
              </IconButton>
            </Tooltip>
              <Button
              variant='outlined'
              startIcon={<EastRounded style={{fontSize: '15px'}} />}
                href='/'
                size='small'
                onClick={handleLogout}
                sx={{textTransform: 'capitalize', textDecoration: "none", marginLeft: '1.3rem' }}>
                Logout
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
