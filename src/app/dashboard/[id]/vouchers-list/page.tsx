import DashboardLayout from "@/components/layouts/organizer/DashboardLayout";
import VouchersList from "@/features/dashboard/voucher/vouchers-list";

const OrganizerVouchersList = () => {
  return (
    <DashboardLayout>
      <VouchersList />
    </DashboardLayout>
  );
};

export default OrganizerVouchersList;
