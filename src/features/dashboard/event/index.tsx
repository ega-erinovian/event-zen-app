"use client";

import EventTable from "./components/EventTable";
import { Loader } from "@/components/ui/loader";
import Loading from "@/components/dashboard/Loading";
import useGetEvents from "@/hooks/api/event/useGetEvents";

const EventList = () => {
  const { data, isPending } = useGetEvents();

  if (isPending) {
    return <Loading text="Table" />;
  }

  return (
    <div className="mx-auto p-8">
      <h1 className="text-9xl mb-8 font-bold">Event List</h1>
      <EventTable data={data} isLoading={isPending} />
    </div>
  );
};

export default EventList;
