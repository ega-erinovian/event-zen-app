import DashboardLayout from "@/components/layouts/organizer/DashboardLayout";
import EventList from "@/features/dashboard/event/event-list";
import React from "react";

const OrganizerEventList = () => {
  return (
    <DashboardLayout>
      <EventList />
    </DashboardLayout>
  );
};

export default OrganizerEventList;
