"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ActiveEvent = () => {
  const [selectedTime, setSelectedTime] = useState("week");

  return (
    <div className="bg-gray-200 rounded-md p-8 relative h-full">
      <div>
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-6xl pt-4 pb-4">10</p>
        <p className="text-lg">Active Events</p>
      </div>
      <div className="absolute top-8 right-8">
        <Select value={selectedTime} onValueChange={setSelectedTime}>
          <SelectTrigger className="w-[180px] bg-slate-400 text-white">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ActiveEvent;
