"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const TicketsSold = () => {
  const [selectedFruit, setSelectedFruit] = useState("today");

  return (
    <div className="bg-gray-200 rounded-md p-8 relative h-full">
      <div>
        <h1 className="text-3xl font-bold">Sales</h1>
        <p className="text-7xl pt-4 pb-2">567</p>
        <p className="text-lg">Tickets Sold</p>
      </div>
      <div className="absolute top-8 right-8">
        <Select value={selectedFruit} onValueChange={setSelectedFruit}>
          <SelectTrigger className="w-[180px] bg-slate-400 text-white">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="week">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TicketsSold;
