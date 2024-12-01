"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SalesChart from "./SalesChart";
import { useState } from "react";

const SalesRevenue = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedTime, setSelectedTime] = useState("today");

  return (
    <div className="bg-gray-100 rounded-md p-8 relative h-full col-span-2 row-span-3 row-start-2">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl font-bold">Sales Revenue</h1>{" "}
        <div className="border-l h-6 border-gray-500"></div>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[90px] text-black shadow-none border-none">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[150px]">
            <SelectGroup>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="absolute top-8 right-8">
        <Select value={selectedTime} onValueChange={setSelectedTime}>
          <SelectTrigger className="w-[180px] bg-slate-400 text-white">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="week">Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <SalesChart />
    </div>
  );
};

export default SalesRevenue;
