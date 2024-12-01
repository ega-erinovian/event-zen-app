import React from "react";
import RecentSalesItem from "./RecentSaleItem";

const RecentSales = () => {
  return (
    <div className="bg-gray-100 row-span-3 col-start-3 row-start-2 rounded-md p-8 relative h-full ">
      <h1 className="text-3xl font-bold mb-4">Recent Sales</h1>
      <RecentSalesItem />
    </div>
  );
};

export default RecentSales;
