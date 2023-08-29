import React from "react";
import TabPanel from "../../../../components/TabPanel";
import XrayResultRecord from "../xray_result/XrayResultRecord";
// import XrayResultReportBasis from "../report_basis";

const RadiologyContent = ({ value }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <XrayResultRecord />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <XrayResultReportBasis /> */}
        <h1>Report</h1>
      </TabPanel>
    </>
  );
};

export default RadiologyContent;
