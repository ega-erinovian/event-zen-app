import EventTable from "./components/EventTable";

const EventList = () => {
  return (
    <div className="mx-auto p-8">
      <h1 className="text-9xl mb-8 font-bold">Event List</h1>
      <EventTable />
    </div>
  );
};

export default EventList;
