import { ReadMoreRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const ReadMoreBtn = ({ handleOpen }) => {
  return (
    <>
      <Tooltip title='Read More'>
        <IconButton onClick={handleOpen}>
          <ReadMoreRounded color='primary' />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ReadMoreBtn;
