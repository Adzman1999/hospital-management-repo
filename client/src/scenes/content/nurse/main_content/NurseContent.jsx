import React from "react";
import TabPanel from "../../../../components/TabPanel";
import PatientRecord from "../patient/PatientRecord";

const NurseContent = ({ value }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <PatientRecord />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>History</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Report</h1>
      </TabPanel>
    </>
  );
};

export default NurseContent;
