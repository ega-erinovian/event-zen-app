import DashboardLayout from "@/components/layouts/organizer/DashboardLayout";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Home from "@/features/dashboard/organizer/home";
import React from "react";

const Organizer = () => {
  return (
    <DashboardLayout>
      <Home />
    </DashboardLayout>
  );
};

export default Organizer;
