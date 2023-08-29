import React from "react";
import { BiotechOutlined } from "@mui/icons-material";
import PositionComponent from "../../../../components/PositionComponent";

const LabPersonnel = () => {
  return (
    <>
      <PositionComponent
        title='Lab Personnel Record'
        icon={<BiotechOutlined sx={{ fontSize: 30 }} />}
        roles='lab'
        position='Edit Lab Personnel'
        modalTitle='Lab Personnel Info'
        initial="Lab Personnel's Name"
        formTitle='Add Lab Personnel'
        editorial='Edit Lab Personnel'
        EditorialSuccessMessage='Lab Personnel Updated Successfully!'
        CreatedSuccessMessage='Lab Personnel Created Successfully!'
      />
    </>
  );
};

export default LabPersonnel;
