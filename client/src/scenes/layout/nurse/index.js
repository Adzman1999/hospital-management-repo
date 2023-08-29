import { Container } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import PatientRecord from "../../content/nurse/PatientRecord";

const NurseLayout = () => {
  return (
    <Container>
      <Header />
      <PatientRecord />
    </Container>
  );
};

export default NurseLayout;
