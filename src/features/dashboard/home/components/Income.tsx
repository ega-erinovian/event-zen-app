"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormatValue } from "@/hooks/use-format-value";
import React, { useState } from "react";

const Income = () => {
  const [selectedFruit, setSelectedFruit] = useState("today");
  const formattedValue = useFormatValue(1000000000);

  return (
    <div className="bg-gray-200 rounded-md p-8 relative h-full">
      <div>
        <h1 className="text-3xl font-bold">Income</h1>
        <p className="text-6xl pt-4 pb-4">+ {formattedValue}</p>
        <p className="text-lg">Revenue</p>
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

export default Income;
