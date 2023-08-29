import React from "react";
import PatientTestRecord from "../patient_test/PatientTestRecord";
import TabPanel from "../../../../components/TabPanel";
// import ReportBasisContent from "../report_basis";

const LaboratoryContent = ({ value }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <PatientTestRecord />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <ReportBasisContent /> */}
        <h1>Report</h1>
      </TabPanel>
    </>
  );
};

export default LaboratoryContent;
