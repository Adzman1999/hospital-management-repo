import { MedicationOutlined } from "@mui/icons-material";
import React from "react";
import PositionComponent from "../../../../components/PositionComponent";

const PharmacistRecord = () => {
  return (
    <>
      <PositionComponent
        title='Pharmacist Record'
        icon={<MedicationOutlined sx={{ fontSize: 30 }} />}
        roles='pharmacist'
        position='Edit Pharmacist'
        modalTitle='Pharmacist Info'
        initial="Pharmacist's Name"
        formTitle='Add Pharmacist'
        editorial='Edit Pharmacist'
        EditorialSuccessMessage='Pharmacist Updated Successfully!'
        CreatedSuccessMessage='Pharmacist Created Successfully!'
      />
    </>
  );
};

export default PharmacistRecord;
