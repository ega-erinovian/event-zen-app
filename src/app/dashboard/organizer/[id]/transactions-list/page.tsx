import DashboardLayout from "@/components/layouts/organizer/DashboardLayout";
import TransactionsList from "@/features/dashboard/organizer/transactions-list";
import React from "react";

const OrganizerTransactionsList = () => {
  return (
    <DashboardLayout>
      <TransactionsList />
    </DashboardLayout>
  );
};

export default OrganizerTransactionsList;
