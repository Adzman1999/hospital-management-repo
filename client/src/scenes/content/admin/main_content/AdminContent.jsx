import React from "react";
import PatientsRecord from "../patients/PatientsRecord";
import DoctorRecord from "../doctors/DoctorRecord";
import NurseRecord from "../nurse/NurseRecord";
import LabPersonnel from "../lab_personnel/LabPersonnel";
import AccountRecord from "../accountant/AccountRecord";
import PharmacistRecord from "../pharmacists/PharmacistRecord";
import RoomsRecord from "../rooms/RoomsRecord";
import CommonSupplyRecord from "../common_supply/CommonSupplyRecord";
import Dashboard from "../dashboard/Dashboard";
import TabPanel from "../../../../components/TabPanel";
import RadiologistRecord from "../radiologist/RadiologistRecord";
import DesignatedSupplyRecord from "../designated_supply/DesignatedSupplyRecord";

const AdminContent = ({ value }) => {
  return (
    <>
      {/* <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel> */}
      <TabPanel value={value} index={0}>
        <PatientsRecord />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DoctorRecord />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NurseRecord />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <LabPersonnel />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AccountRecord />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <PharmacistRecord />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <RadiologistRecord />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <RoomsRecord />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <CommonSupplyRecord />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <DesignatedSupplyRecord />
      </TabPanel>
    </>
  );
};

export default AdminContent;
