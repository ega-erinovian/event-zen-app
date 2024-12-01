"use client";

import { Calendar } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const EventCount = () => {
  const [selectedTime, setSelectedTime] = useState("all-event");

  return (
    <div className="col-span-3 flex justify-between items-center bg-gray-300 rounded-md p-4">
      <div className="flex gap-2 items-center h-full">
        <Calendar />
        <p className="font-semibold">120 Events</p>
      </div>
      <div>
        <Select value={selectedTime} onValueChange={setSelectedTime}>
          <SelectTrigger className="w-[120px] bg-gray-200 text-black shadow-none border-none">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-event">All Event</SelectItem>
              <SelectItem value="sold-out">Sold Out</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default EventCount;
