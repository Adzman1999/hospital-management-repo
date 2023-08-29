import { Container } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import PharmacyContent from "../../content/pharmacy/main_content/PharmacyContent";

const PharmacyLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Header setValue={setValue} />
      <PharmacyContent value={value} />
    </Container>
  );
};

export default PharmacyLayout;
