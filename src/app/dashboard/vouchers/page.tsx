import DashboardLayout from "@/components/layouts/DashboardLayout";
import VouchersList from "@/features/dashboard/voucher";

const DashboardVouchersList = () => {
  return (
    <DashboardLayout>
      <VouchersList />
    </DashboardLayout>
  );
};

export default DashboardVouchersList;
