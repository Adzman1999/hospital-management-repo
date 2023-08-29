import { Button, Stack } from "@mui/material";
import React from "react";

const SubmitBox = ({ handleClose }) => {
  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Button
          onClick={handleClose}
          id='sign-up'
          className='btn-bg'
          variant='contained'
          sx={{
            textTransform: "capitalize",
            boxShadow: 0,
          }}>
          Cancel
        </Button>
        <Button
          type='submit'
          id='sign-up'
          className='btn-bg'
          variant='contained'
          sx={{
            textTransform: "capitalize",
            boxShadow: 0,
          }}>
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default SubmitBox;
