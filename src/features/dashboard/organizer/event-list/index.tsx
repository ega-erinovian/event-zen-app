"use client";

import { useState } from "react";
import EventCount from "./components/EventCount";
import EventTable from "./components/EventTable";

const EventList = () => {
  return (
    <div className="mx-auto p-8">
      <h1 className="text-6xl font-bold">Event List</h1>
      <EventTable />
    </div>
  );
};

export default EventList;
