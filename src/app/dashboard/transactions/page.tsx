import DashboardLayout from "@/components/layouts/DashboardLayout";
import TransactionsList from "@/features/dashboard/transaction/transactions-list";
import React from "react";

const OrganizerTransactionsList = () => {
  return (
    <DashboardLayout>
      <TransactionsList />
    </DashboardLayout>
  );
};

export default OrganizerTransactionsList;
