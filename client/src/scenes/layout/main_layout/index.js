import { Container } from "@mui/material";
import React, { useState } from "react";
import { HospitalState } from "../../../context/HospitalProvider";
import Header from "../../../components/Header";
import AdminContent from "../../content/admin/main_content/AdminContent";
import PharmacyContent from "../../content/pharmacy/main_content/PharmacyContent";
import LaboratoryContent from "../../content/Laboratory/main_content/LaboratoryContent";
import RadiologyContent from "../../content/radiology/main_content/RadiologyContent";
import NurseContent from "../../content/nurse/main_content/NurseContent";
import BillingRecord from "../../content/billing/BillingRecord";

const MainLayout = () => {
  const [value, setValue] = useState(0);
  const { user } = HospitalState();
  return (
    <>
    
    <Container>
    <Header setValue={setValue} />
      {(user && user.username === "admin" && <AdminContent value={value} />) ||
        (user && user.username === "pharmacist" && (
          <PharmacyContent value={value} />
        )) ||
        (user && user.username === "labpersonnel" && (
          <LaboratoryContent value={value} />
        )) ||
        (user && user.username === "radiologist" && (
          <RadiologyContent value={value} />
        )) ||
        (user && user.username === "nurse" && <NurseContent value={value} />) ||
        (user && user.username === "accountant" && <BillingRecord />)}
    </Container>
    </>
  );
};

export default MainLayout;
