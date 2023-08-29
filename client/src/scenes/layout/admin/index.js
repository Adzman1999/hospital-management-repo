import React, { useState } from "react";
import AdminContent from "../../content/admin/main_content/AdminContent";
import Header from "../../../components/Header";
import { Container } from "@mui/material";

const AdminLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Header setValue={setValue} />
      <AdminContent value={value} />
    </Container>
  );
};

export default AdminLayout;
