import { Container } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import RadiologyContent from "../../content/radiology/main_content/RadiologyContent";

const RadiologyLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Header setValue={setValue} />
      <RadiologyContent value={value} />
    </Container>
  );
};

export default RadiologyLayout;
