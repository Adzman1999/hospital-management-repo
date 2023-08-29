import React from "react";
import TabPanel from "../../../../components/TabPanel";
import MedicineRecord from "../medicine/MedicineRecord";
import PrescriptionRecord from "../prescription/PrescriptionRecord";
// import ReportBasisContent from "../report_basis";

const PharmacyContent = ({ value }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <MedicineRecord />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PrescriptionRecord />
      </TabPanel>
      {/* <TabPanel value={value} index={2}> */}
        {/* <ReportBasisContent /> */}
        {/* <h1>Report</h1>
      </TabPanel> */}
    </>
  );
};

export default PharmacyContent;
