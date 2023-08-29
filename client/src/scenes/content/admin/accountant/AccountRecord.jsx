import React from "react";
import { PaymentsOutlined } from "@mui/icons-material";
import PositionComponent from "../../../../components/PositionComponent";

const AccountRecord = () => {
  return (
    <>
      <PositionComponent
        title='Accountant Record'
        icon={<PaymentsOutlined sx={{ fontSize: 30 }} />}
        roles='accountant'
        position='Edit Accountant'
        modalTitle='Accountant Info'
        initial="Accountant's Name"
        formTitle='Add Accountant'
        editorial='Edit Accountant'
        EditorialSuccessMessage='Accountant Updated Successfully!'
        CreatedSuccessMessage='Accountant Created Successfully!'
      />
    </>
  );
};

export default AccountRecord;
