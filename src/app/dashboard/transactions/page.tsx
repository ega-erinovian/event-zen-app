import DashboardLayout from "@/components/layouts/DashboardLayout";
import TransactionsList from "@/features/dashboard/transaction";
import React from "react";

const OrganizerTransactionsList = () => {
  return (
    <DashboardLayout>
      <TransactionsList />
    </DashboardLayout>
  );
};

export default OrganizerTransactionsList;
