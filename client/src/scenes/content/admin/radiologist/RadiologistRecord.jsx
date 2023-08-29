import { Flip } from "@mui/icons-material";
import React from "react";
import PositionComponent from "../../../../components/PositionComponent";

const RadiologistRecord = () => {
  return (
    <>
      <PositionComponent
        title='Radiologist Record'
        icon={<Flip sx={{ fontSize: 30 }} />}
        roles='radiologist'
        position='Edit Radiologist'
        modalTitle='Radiologist Info'
        initial="Radiologist's Name"
        formTitle='Add Radiologist'
        editorial='Edit Radiologist'
        EditorialSuccessMessage='Radiologist Updated Successfully!'
        CreatedSuccessMessage='Radiologist Created Successfully!'
      />
    </>
  );
};

export default RadiologistRecord;
