import DashboardLayout from "@/components/layouts/DashboardLayout";
import EventList from "@/features/dashboard/event";
import React from "react";

const DashboardEventList = () => {
  return (
    <DashboardLayout>
      <EventList />
    </DashboardLayout>
  );
};

export default DashboardEventList;
