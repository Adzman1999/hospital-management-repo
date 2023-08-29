import { Card, Grid } from "@mui/material";
import React from "react";

const ContentGrid = ({ children, position, md }) => {
  return (
    <>
      <Grid item xs={12} md={md}>
        <Card
          sx={{
            p: 1,
            display: "flex",
            gap: 2,
            position: position,
          }}>
          {children}
        </Card>
      </Grid>
    </>
  );
};

export default ContentGrid;
