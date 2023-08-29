import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { HospitalState } from "../context/HospitalProvider";
import PositionFormModal from "../scenes/layout/admin/position/PositionFormModal";
import PositionEditModal from "../scenes/layout/admin/position/PositionEditModal";
import PositionReadMoreModal from "../scenes/layout/admin/position/PositionReadMoreModal";
import { MagnifyingGlass } from "phosphor-react";
import { searchRoles } from "../actions/admin/PositionAction";

const PositionComponent = ({
  title,
  icon,
  roles,
  position,
  modalTitle,
  initial,
  formTitle,
  editorial,
  EditorialSuccessMessage,
  CreatedSuccessMessage,
}) => {
  const { searchResult } = HospitalState();
  const [searchResult1, setSearchResult1] = useState([]);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    searchRoles(search, setSearchResult1);

  }
  return (
    <>
<Stack component='form'
              onSubmit={handleSearch} direction='row' alignItems='center' justifyContent='space-between' sx={{ position: 'sticky',zIndex: 1000, top: 63, background: '#f4f4f4' }}>
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
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button type='submit'>
                      <MagnifyingGlass fontSize={"15px"} />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          
        </Stack>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              {initial}
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Department
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Shift
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Contact No.
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        {searchResult1.length === 0 ? 
        <TableBody>
          {searchResult.map((index) => (
            <Fragment key={index._id}>
              {index.role === roles && (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}>
                  <TableCell component='th' scope='row'>
                    {`${index.firstName} ${index.middleName} ${index.lastName}`}
                    {"    "}
                    {`${index.extensionName}` === null
                      ? ""
                      : `${index.extensionName}`}
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {index.department}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {index.shift}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {index.contact}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Stack direction='row' alignItems='center'>
                      <PositionEditModal
                        index={index}
                        position={position}
                        editorial={editorial}
                        EditorialSuccessMessage={EditorialSuccessMessage}
                      />
                      <PositionReadMoreModal
                        index={index}
                        modalTitle={modalTitle}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody> : 
        <TableBody>
        {searchResult1.map((index) => (
          <Fragment key={index._id}>
            {index.role === roles && (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}>
                <TableCell component='th' scope='row'>
                  {`${index.firstName} ${index.middleName} ${index.lastName}`}
                  {"    "}
                  {`${index.extensionName}` === null
                    ? ""
                    : `${index.extensionName}`}
                </TableCell>

                <TableCell component='th' scope='row'>
                  {index.department}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.shift}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {index.contact}
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction='row' alignItems='center'>
                    <PositionEditModal
                      index={index}
                      position={position}
                      editorial={editorial}
                      EditorialSuccessMessage={EditorialSuccessMessage}
                    />
                    <PositionReadMoreModal
                      index={index}
                      modalTitle={modalTitle}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            )}
          </Fragment>
        ))}
      </TableBody>
        
        }
      </Table>
      <Box
        sx={{
          position: "sticky",
          bottom: 2,
          display: "flex",
          flexDirection: "row-reverse",
        }}>
        <PositionFormModal
          roles={roles}
          formTitle={formTitle}
          CreatedSuccessMessage={CreatedSuccessMessage}
        />
      </Box>
    </>
  );
};

export default PositionComponent;
