import { Container } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import LaboratoryContent from "../../content/Laboratory/main_content/LaboratoryContent";

const LaboratoryLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Header setValue={setValue} />
      <LaboratoryContent value={value} />
    </Container>
  );
};

export default LaboratoryLayout;
