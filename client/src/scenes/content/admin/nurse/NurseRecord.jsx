import React from "react";
import { BubbleChartOutlined } from "@mui/icons-material";
import PositionComponent from "../../../../components/PositionComponent";

const NurseRecord = () => {
  return (
    <>
      <PositionComponent
        title='Nurse Record'
        icon={<BubbleChartOutlined sx={{ fontSize: 30 }} />}
        roles='nurse'
        position='Edit Nurse'
        modalTitle='Nurse Info'
        initial="Nurse's Name"
        formTitle='Add Nurse'
        editorial='Edit Nurse'
        EditorialSuccessMessage='Nurse Updated Successfully!'
        CreatedSuccessMessage='Nurse Created Successfully!'
      />
    </>
  );
};

export default NurseRecord;
