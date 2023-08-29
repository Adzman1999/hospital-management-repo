import { Button, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";

const GridComponent = ({ title, children, icon, search, onSubmit,
  onChange }) => {
  return (
    <>
        <Stack component='form'
              onSubmit={onSubmit} direction='row' alignItems='center' justifyContent='space-between' sx={{ position: 'sticky',zIndex: 1000, top: 63, background: '#f4f4f4' }}>
          <Stack
            mt={4} 
            mb={2}
            spacing={1}
            alignItems='center'
            direction='row'>
              {icon}<Typography variant='h6'>{title}</Typography>
          </Stack>
          <Stack  mt={4} 
              mb={2}
          >
          <TextField
              
              sx={{ display: { xs: "none", md: "flex" } }}
              size='small'
              placeholder='Search here...'
              type='text'
              value={search}
              onChange={onChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button >
                      <MagnifyingGlass fontSize={"15px"} />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          
        </Stack>
      <Grid container spacing={2} mb={3}>
        {children}
      </Grid>
    </>
  );
};

export default GridComponent;
