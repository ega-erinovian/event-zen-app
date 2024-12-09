import { TicketCheck } from "lucide-react";

const RecentSalesItem = () => {
  return (
    <div className="border-b-2 border-b-gray-200 flex items-baseline justify-between gap-4 py-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-600 flex justify-center items-center">
          <TicketCheck className="text-white text-xl w-8 h-8" />
        </div>
        <div className="font-bold">
          <p className="text-xs text-gray-400">Event#001</p>
          <h1 className="text-2xl text-gray-800">Slipknot</h1>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">2m ago</p>
      </div>
    </div>
  );
};

export default RecentSalesItem;
